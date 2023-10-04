import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductService } from '../core/services/product-service/product.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  
  constructor(private service:ProductService){}
  

  collection:any=[];

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
      console.log(data);
      console.log(data.length);
      this.collection = data;
      console.log(this.collection);
      console.log("inside: "+this.collection.length);
    });

    console.log("outside: "+this.collection.length);

    
   
  }
}
