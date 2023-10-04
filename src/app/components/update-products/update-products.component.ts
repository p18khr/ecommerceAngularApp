import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product-service/product.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit{

  isCollapsed=true;

  constructor(private service:ProductService,private route:ActivatedRoute,private router:Router){}

  productData=new FormGroup({
    price:new FormControl(),
    discount:new FormControl(),
    stock:new FormControl()
  })

collection:any;
id:any;
iduser:any;
idpro:number=0;
ngOnInit(): void {
this.invalid=false;

this.iduser = this.id = this.route.snapshot.paramMap.get("id1");
 this.id = this.route.snapshot.paramMap.get("id2");
 this.idpro = parseInt(this.id);

  this.service.getProduct(this.idpro).subscribe(data =>{
    this.collection=data;
    this.productData=new FormGroup({
      price:new FormControl(data.price),
      discount:new FormControl(data.discount),
      stock:new FormControl(data.stock)
    })
  })

  

}


get price(){
  return this.productData.get("price");
}
get discount(){
  return this.productData.get("discount");
}
get stock(){
  return this.productData.get("stock");
}

product:product = new product();
invalid:boolean=false;

add(){
   this.invalid=true;
   this.product.price=this.productData.value.price;
   this.product.stock=this.productData.value.stock;
   this.product.discount=this.productData.value.discount;

   this.service.putProduct(this.id,this.product).subscribe();
   
}



}
