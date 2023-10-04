import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/core/models/product';
import { sales } from 'src/app/core/models/sales';
import { CartService } from 'src/app/core/services/cart-service/cart.service';
import { ProductService } from 'src/app/core/services/product-service/product.service';
import { SalesService } from 'src/app/core/services/sales-service/sales.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  isCollapsed=true;
  id:any;
  id1:number=0;
  collection:any=[];
  data:any;

formData= new FormGroup({
  quantity:new FormControl(1,Validators.required)
})

get quantity(){
  return this.formData.get("quantity");
}

  constructor(private route:ActivatedRoute, private router:Router, private service:CartService, private servicep:ProductService,private services:SalesService){}


  n:boolean=false;

  ngOnInit(): void {
    
    this.n=false;
      this.id = this.route.snapshot.paramMap.get("id");
      this.id1 = parseInt(this.id);
    this.service.getCart(this.id).subscribe(data =>{
      this.collection=data;
    })

    

  }
  
  selectedTeam="1";
  onSelected(value:string){
   this.selectedTeam = value;
  }

  quant:number=0;
  sales:sales=new sales();
  product:product=new product();
  pr1:any;
  pr:any=[];
  dataCart!:any;


  addSales(idProduct:number,idCart:number){

    this.servicep.getProduct(idProduct).subscribe(data=>{
      
      this.pr = data;

      if(this.pr.stock < 1){
        this.router.navigate([`order-failed/${this.id}`]);
      }
      else{
        this.quant = parseInt(this.selectedTeam);
        this.sales.quantity = this.quant;
        this.sales.productId=idProduct;
        this.sales.userId=this.id;
        this.sales.name=this.pr.name;
        this.sales.price=this.pr.price;
        this.sales.discount=this.pr.discount;
        this.sales.vendorId=this.pr.vendor;
        this.sales.brand = this.pr.brand;
        this.sales.category=this.pr.category;
        this.sales.image=this.pr.image;
        this.services.postOrder(this.sales).subscribe();
  
  
        this.product.stock = this.quant;
  
      this.servicep.updateStocks(idProduct,this.product).subscribe();
      }
      
    });
  
   
    this.service.deleteCart(idCart).subscribe();

    
    setTimeout(() => {
      this.router.navigate([`order-confirmed/${this.id}/${idProduct}`])
    }
    , 500);
  }

  deleteFromCart(idCart:number){
    this.service.deleteCart(idCart).subscribe();
    location.reload();
  }

  redirect(){
    this.router.navigate([`products/${this.id}`]);
    }

    
    counter(num:number){
        return Array(num);
    }

    
}
