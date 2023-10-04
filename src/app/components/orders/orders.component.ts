import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from 'src/app/core/services/sales-service/sales.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  

  constructor(private router:ActivatedRoute,private service:SalesService){}

  isCollapsed = true;
  id:any;
  collection:any=[];
  ngOnInit(): void {
  this.id = this.router.snapshot.paramMap.get("id");

  this.service.getOrders(this.id).subscribe(data=>{
     this.collection = data;
  })
  }

}
