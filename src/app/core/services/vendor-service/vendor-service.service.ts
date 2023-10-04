import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { vendor } from '../../models/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  constructor(private http:HttpClient) { }
  getVendor(){
    return this.http.get<any>("http://localhost:8082/vendor-login");
  }

  getAuthStatus(){
    return true;
  }
  postVendor(vendor:vendor){
    return this.http.post("http://localhost:8082/register-vendor",vendor);
  }
}
