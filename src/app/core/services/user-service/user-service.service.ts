import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

 getUsers(){
  return this.http.get<any>("http://localhost:8082/login");
 }

 getAuthStatus(){
     return true;
 }

 

  postUser(user:user)
  {
     return this.http.post("http://localhost:8082/user-register",user); 
  }
}
