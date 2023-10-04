import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cart } from '../../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  public getCart(id:number):Observable<any>{
    return this.http.get<any>(`http://localhost:8082/get-cart/${id}`);
  }

  public postCart(cart:cart,iduser:number,idproduct:number):Observable<any>{
    return this.http.post(`http://localhost:8082/add-cart/${iduser}/${idproduct}`,cart);
  }

  public deleteCart(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8082/delete-cart/${id}`);
  }
}
