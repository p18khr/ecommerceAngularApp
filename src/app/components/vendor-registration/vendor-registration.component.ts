import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { flip } from '@popperjs/core';
import { user } from 'src/app/core/models/user';
import { vendor } from 'src/app/core/models/vendor';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { VendorServiceService } from 'src/app/core/services/vendor-service/vendor-service.service';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent {

  isCollapsed=true;
  registerData = new FormGroup({
    Name: new FormControl(""),
    contactNo: new FormControl(),
    email: new FormControl(""),
    password: new FormControl(""),
  })

  constructor(private service:VendorServiceService){}
  ngOnInit(): void {
    
  }

  vendor:vendor = new vendor();

  get Name(){
    return this.registerData.get("Name");
  }
  get contactNo(){
    return this.registerData.get("contactNo");
  }
  get email(){
    return this.registerData.get("email");
  }
  get password(){
    return this.registerData.get("password");
  }

  invalid:boolean = false;
  add:boolean=false;
  register(){
  this.invalid =false;
  this.add=false;
  this.service.getVendor().subscribe(data =>{
    const res = data.find((a:any) =>{
      return (a.email == this.registerData.value.email)
    }
      )
      if(res){
        this.invalid = true;
      }
      else{
        this.vendor = new vendor();
        this.vendor.name=this.registerData.value.Name!;
        this.vendor.contactNo=this.registerData.value.contactNo!;
        this.vendor.email=this.registerData.value.email!;
        this.vendor.password=this.registerData.value.password!
    
        this.add=true;
        this.service.postVendor(this.vendor).subscribe();
      }
  })

  }
}
