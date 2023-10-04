import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product-service/product.service';
import { SalesService } from 'src/app/core/services/sales-service/sales.service';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit{

  isCollapsed=true;
  constructor(private route:ActivatedRoute, private service:ProductService,private services:SalesService, private router:Router){}

  id:any;
  id2:any;
  collectionnew:any;
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id1");
    this.id2=this.route.snapshot.paramMap.get("id2");

    this.services.getLatestOrder(this.id).subscribe(data=>{
      this.collectionnew=data;
    })

      }


redirect(){
this.router.navigate([`products/${this.id}`]);
}

}
