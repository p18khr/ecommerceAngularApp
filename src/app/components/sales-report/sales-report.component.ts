import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from 'src/app/core/services/sales-service/sales.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit{

  isCollapsed=true;

  dates = new FormGroup({
    startingDate: new FormControl("",Validators.required),
    endDate:new FormControl("",Validators.required)
  })




  get startingDate(){
    return this.dates.get("startingDate");
  }
  get endDate(){
    return this.dates.get("endDate");
  }
  

  sum:number=0;
  constructor(private route:ActivatedRoute,private service:SalesService){
    this.idvendor = this.route.snapshot.paramMap.get("id");
    this.service.getSales().subscribe(data=>{
        this.collection=data;

        for(let d of this.collection){
          this.sum += d.totalPrice;
        }
    })
  }
  
  idvendor:any
  brand:string="";
  category:string="";
  collection:any=[];
  ngOnInit(): void {
   
    this.service.getBrand().subscribe(data=>{
      this.brand=data;
    })


    this.service.getCategory().subscribe(data=>{
      this.category=data;
    })
  }


  invalidEndDate:boolean=false;
  endDateCheck(){
    this.invalidEndDate = false;
    let stDate = new Date(this.dates.value.startingDate!);
    let enDate = new Date(this.dates.value.endDate!);

    if(stDate.getDate() > enDate.getDate()){
       this.invalidEndDate=true;
    }

    
  }

  invalidStartDate:boolean=false;
  startDateCheck(){
    this.invalidStartDate = false;
    let stDate = new Date(this.dates.value.startingDate!);
    let enDate = new Date(this.dates.value.endDate!);

    if(stDate.getDate() > enDate.getDate()){
       this.invalidStartDate=true;
    }

  }


  search(){
     this.service.filter(this.idvendor,this.dates.value.startingDate!,this.dates.value.endDate!).subscribe(data=>{
      this.collection=data;
      this.sum=0;
      for(let d of this.collection){
        this.sum += d.totalPrice;
      }
     })
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

      this.sum=0;
      for(let d of this.collection){
        this.sum += d.totalPrice;
      }

      })
    }
    else if(this.selectedCategory == ""){
      this.service.searchProduct(this.selectedBrand).subscribe(data=>{
        this.collection=data;

        this.sum=0;
      for(let d of this.collection){
        this.sum += d.totalPrice;
      }

      })
    }
    else{
      this.service.search(this.selectedBrand,this.selectedCategory).subscribe(data=>{
        
        if(data.length == 0){
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
        }
        else{
          this.collection=data;
        }
        this.sum=0;
        for(let d of this.collection){
          this.sum += d.totalPrice;
        }
      });
    }
  }
}
