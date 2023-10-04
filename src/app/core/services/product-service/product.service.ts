import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<any>("http://localhost:8082/product");
  }

  getVendorProducts(id:number):Observable<any>{
    return this.http.get<any>(`http://localhost:8082/product-list/${id}`);
  }

  getProduct(id:number):Observable<any>{
      return this.http.get<any>(`http://localhost:8082/product/${id}`);
  }

  postProduct(product:product,id:number):Observable<any>{
    return this.http.post(`http://localhost:8082/product/${id}`,product);
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8082/delete-product/${id}`);
  }

  putProduct(id:number,product:product):Observable<any>{
    return this.http.put(`http://localhost:8082/product/${id}`,product);
  }


  updateStocks(id:number,product:product){
    return this.http.post(`http://localhost:8082/update-stock/${id}`,product);
  }

  searchProduct(key:string){
    return this.http.get<any>(`http://localhost:8082/search-product/${key}`);
  }


  getBrand(){
    return this.http.get<any>(`http://localhost:8082/product-brand`);
   }

   getCategory(){
    return this.http.get<any>(`http://localhost:8082/product-category`);
   }

   search(brand:string,category:string){
    return this.http.get<any>(`http://localhost:8082/search-brand-category/${brand}/${category}`);
   }

}
