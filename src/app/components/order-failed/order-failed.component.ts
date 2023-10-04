import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-failed',
  templateUrl: './order-failed.component.html',
  styleUrls: ['./order-failed.component.css']
})
export class OrderFailedComponent implements OnInit{
  

  isCollapsed:boolean=true;
  constructor(private route:ActivatedRoute){}

  id:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
  }

}
