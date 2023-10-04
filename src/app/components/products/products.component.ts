import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { cart } from 'src/app/core/models/cart';
import { CartService } from 'src/app/core/services/cart-service/cart.service';
import { ProductService } from 'src/app/core/services/product-service/product.service';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{


  isCollapsed=true;
  id:any;
  iduser:number=0;
  cart:cart = new cart();
  brand:any=[];
  category:any=[];
  
  constructor(private route:ActivatedRoute,private service:ProductService,private servicec:CartService,private router:Router){}

  collection:any=[];
   currentstatus:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.iduser = parseInt(this.id);

    
    this.service.getProducts().subscribe(data =>{
      this.collection = data;
      
    })

    this.service.getBrand().subscribe(data=>{
      this.brand=data;
    })


    this.service.getCategory().subscribe(data=>{
      this.category=data;
    })
}


  collectionnew:any=[];
  invalid:boolean=false;
  displayStyle = "none";
  

  redirectToHome(){
    
    location.reload();
  }


  redirect(idProduct:number){
    this.displayStyle = "block";
    this.invalid=true;
      for(let data of this.collection){
        if(data.id==idProduct){
          this.collectionnew=data;
        }
      }

      this.cart.brand=this.collectionnew.brand;
      this.cart.category=this.collectionnew.category;
      this.cart.discount=this.collectionnew.discount;
      this.cart.name=this.collectionnew.name;
      this.cart.price=this.collectionnew.price;
      this.cart.quantity=this.collectionnew.quantity;
      this.cart.stock=this.collectionnew.stock;
      this.cart.image=this.collectionnew.image;

      this.servicec.postCart(this.cart,this.iduser,idProduct).subscribe();
      
  }


   searchData= new FormGroup({
    search:new FormControl("")
   })

   get search(){
    return this.searchData.get("search");
   }

   filter(){
    this.service.searchProduct(this.searchData.value.search!).subscribe(data=>{
      this.collection=data;
    })
    this.isCollapsed=true;
   }

   closePopup() {
    this.displayStyle = "none";
  }

  proceedToCart(){
    this.router.navigate([`cart/${this.id}`]);
  }

  selectedBrand="";
  onSelected(value:string){
   this.selectedBrand = value;
   this.isCollapsed=true;
   this.go();
  }

  selectedCategory="";
  onSelect(value:string){
    this.selectedCategory = value; 
    this.isCollapsed=true;
    this.go();
  }

  go(){
    if(this.selectedBrand == ""){
      this.service.searchProduct(this.selectedCategory).subscribe(data=>{
        this.collection=data;
      })
    }
    else if(this.selectedCategory == ""){
      this.service.searchProduct(this.selectedBrand).subscribe(data=>{
        this.collection=data;
      })
    }
    else{
      this.service.search(this.selectedBrand,this.selectedCategory).subscribe(data=>{
        
        if(data.length == 0){
        }
        else{
          this.collection=data;
        }
      });
    }
  }
}
