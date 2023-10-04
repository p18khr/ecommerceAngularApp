import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';
import { user } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

  isCollapsed = true;

  registerData = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    address: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  })

  constructor(private service:UserServiceService){}
  ngOnInit(): void {
    
  }

  user: user = new user();

  get firstName(){
    return this.registerData.get("firstName");
  }
  get lastName(){
    return this.registerData.get("lastName");
  }
  get address(){
    return this.registerData.get("address");
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
  this.service.getUsers().subscribe(data =>{
    const res = data.find((a:any) =>{
      return (a.email == this.registerData.value.email)
    }
      )
      if(res){
        this.invalid = true;
      }
      else{
        this.user = new user();
        this.user.firstName=this.registerData.value.firstName!;
        this.user.lastName=this.registerData.value.lastName!;
        this.user.address=this.registerData.value.address!;
        this.user.email=this.registerData.value.email!;
        this.user.password=this.registerData.value.password!
        
        this.add=true;
        this.service.postUser(this.user).subscribe();
      }
  })

  }
}
