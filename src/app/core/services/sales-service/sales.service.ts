import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sales } from '../../models/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) { }

 postOrder(sales:sales){
  return this.http.post(`http://localhost:8082/sales`,sales);
 }

 getLatestOrder(id:number){
  return this.http.get<any>(`http://localhost:8082/latest-sales-order/${id}`);
 }

 getSales(){
  return this.http.get<any>(`http://localhost:8082/get-sales`);
 }

 getOrders(id:number){
   return this.http.get<any>(`http://localhost:8082/get-orders/${id}`);
 }

 filter(idvendor:number,startDate:String,endDate:String){
        return this.http.get<any>(`http://localhost:8082/get-date/${idvendor}/${startDate}/${endDate}`);
 }

 getBrand(){
  return this.http.get<any>(`http://localhost:8082/sales-brand`);
 }

 getCategory(){
  return this.http.get<any>(`http://localhost:8082/sales-category`);
 }

 
 search(brand:string,category:string){
  return this.http.get<any>(`http://localhost:8082/sales-brand-category/${brand}/${category}`);
 }

 searchProduct(key:string){
  return this.http.get<any>(`http://localhost:8082/search-sales/${key}`);
}


}
