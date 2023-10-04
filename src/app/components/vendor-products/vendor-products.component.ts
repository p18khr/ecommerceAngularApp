import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product-service/product.service';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.css']
})
export class VendorProductsComponent implements OnInit {
  isCollapsed=true;
  id1: any;
  idvendor:number=0;
  
constructor(private router:Router,private route:ActivatedRoute,private service:ProductService){}


ngOnInit(): void {
    this.id1 = this.route.snapshot.paramMap.get("id");
    this.idvendor=parseInt(this.id1);
    this.service.getVendorProducts(this.id1).subscribe(data =>{
      this.collection = data;
    })

}



  collection:any=[];
  id:any;

redirect(){
  this.router.navigate([`/enter-product/${this.id1}`]);
}


delete(id:number){
  this.service.deleteProduct(id).subscribe();
  location.reload();
}

  editProduct(id:number){
     this.router.navigate([`/update-product/${this.id1}/${id}`]);
  }

  
  
}
