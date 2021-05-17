import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  getAllProduct():Observable<any>{
    return this.http.get("http://localhost:8081/product/all");
  }
  deleteProduct(pid:number):Observable<any>{
      return this.http.delete("http://localhost:8081/product/"+pid);
  }
}
