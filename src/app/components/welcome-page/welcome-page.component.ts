import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/user-service/user-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})

export class WelcomePageComponent implements OnInit{


  isCollapsed=true;

  ngOnInit(): void {
    
  }

  constructor(private service:UserServiceService,private router:Router){}

  userData = new FormGroup({
    email: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })

  invalid:boolean = false;

authenticate(){
  this.invalid = false;
  this.service.getUsers().subscribe(data =>{
    const res = data.find((a:any) =>{
          return (a.email == this.userData.value.email && a.password == this.userData.value.password);
    })
    if(res){
      this.service.getAuthStatus();
      this.router.navigate([`products/${res.id}`]);
    }
    else{
      this.invalid = true;
    }
   })
}

  get email(){
    return this.userData.get("email");
  }

  get password(){
    return this.userData.get("password");
  }
  
}
