import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product-service/product.service';

@Component({
  selector: 'app-enter-products',
  templateUrl: './enter-products.component.html',
  styleUrls: ['./enter-products.component.css']
})
export class EnterProductsComponent implements OnInit{

  isCollapsed = true;
  productData = new FormGroup({
    brand: new FormControl("",Validators.required),
    category: new FormControl("",Validators.required),
    discount: new FormControl(0,Validators.required),
    name: new FormControl("",Validators.required),
    price: new FormControl(0,Validators.required),
    stock: new FormControl(0,Validators.required),
    image:new FormControl("",Validators.required)
  })

  invalid2:boolean=false;
  add1:boolean=false;
  id:any;
  idnew:number=0;
  product:product = new product();

constructor(private router:Router,private route:ActivatedRoute,private service:ProductService){}
 

ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get("id");
  }



  add(){
    this.invalid2 = false;
    this.add1=false;
    
    this.idnew = parseInt(this.id);

    this.service.getProducts().subscribe(data =>{
      const res = data.find((a:any)=>{
        return (a.name == this.productData.value.name)
      })
      if(res){
         this.invalid2 = true;
      }
      else{
        this.product = new product();
        this.product.brand = this.productData.value.brand!;
        this.product.discount = this.productData.value.discount!;
        this.product.category = this.productData.value.category!;
        this.product.name = this.productData.value.name!;
        this.product.price = this.productData.value.price!;
        this.product.stock = this.productData.value.stock!;
        this.product.image=this.productData.value.image!;

        this.add1=true;
        this.service.postProduct(this.product,this.idnew).subscribe();
        
      }
    })
  }

    

  get brand(){
    return this.productData.get("brand");
  }
  get category(){
    return this.productData.get("category");
  }
  get discount(){
    return this.productData.get("discount");
  }
  get name(){
    return this.productData.get("name");
  }
  get price(){
    return this.productData.get("price");
  }
  get stock(){
    return this.productData.get("stock");
  }
  get image(){
    return this.productData.get("image");
  }
  
}
