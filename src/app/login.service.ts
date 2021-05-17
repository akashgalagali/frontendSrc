import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }
  validateLogin(uname:string,pass:string,role:string):Observable<any>{
    console.log("login is involed");
    return this.httpclient.get<Users>('http://localhost:8081/user/login/'+uname+'/pass/'+pass);
  }
  logout(uname:string):Observable<any>{
    console.log("loged out");
    return this.httpclient.get<Users>('http://localhost:8081/user/logout/'+uname);
  }
}
