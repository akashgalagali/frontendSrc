import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandServiceService {

  constructor(private http:HttpClient) { }
  getAllLand():Observable<any>{
    return this.http.get("http://localhost:8081/land/all");
  }
  deleteLand(lid:string):Observable<any>{
      return this.http.delete("http://localhost:8081/land/"+lid);
  }
}
