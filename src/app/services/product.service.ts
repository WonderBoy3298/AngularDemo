import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http:HttpClient) { }


  public getProduct(page:number=1 , size:number=4): Observable<Array<Product>>{
    return this.http.get<Array<any>>(`http://localhost:3000/product?_page=${page}&_limit=${size}`) ;
  }


  public checkProduct(product:any):Observable<any>{
    return this.http.patch(`http://localhost:3000/product/${product.id}`,{checked:!product.checked})
  }

  public saveProducts(product :Product):Observable<any>{
    return this.http.post<Product>(`http://localhost:3000/product/`,{product})

  }


  public searchProduct(keyword:String):Observable<any>{
    return this.http.get<Array<Product>>(`http://localhost:3000/product?name_like=${keyword}`)
  }


}
