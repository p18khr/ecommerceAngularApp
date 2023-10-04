import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorServiceService } from 'src/app/core/services/vendor-service/vendor-service.service';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit{


  isCollapsed=true;

  ngOnInit(): void {
    this.authenticate();
  }

  constructor(private servicev:VendorServiceService,private router:Router){}

  vendorData = new FormGroup({
    email: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })

  invalid:boolean = false;

authenticate(){
  this.invalid = false;
  this.servicev.getVendor().subscribe((data) =>{
    const res = data.find((a:any) =>{
          return (a.email == this.vendorData.value.email && a.password == this.vendorData.value.password)
    })
    if(res){
      this.router.navigate([`enter-products/${res.id}`]);
    }
    else{
      this.invalid = true;
      (<HTMLInputElement>document.getElementById("login")).style.backgroundImage = 'url(red.jpg)';
    }
   })
}

  get email(){
    return this.vendorData.get("email");
  }

  get password(){
    return this.vendorData.get("password");
  }
  
   
}

