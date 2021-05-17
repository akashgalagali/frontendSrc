import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Users;
  status:boolean=false;
  
  constructor(private loginService:LoginService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  validateLogin(uname:string,pass:string,role:string){
    this.loginService.validateLogin(uname,pass,role).subscribe(
      user=>{
        this.user=user;
        this.status=true;
        alert("Logged in successfully");
        this.router.navigate(['../adminDashboard']);
        

    });
  }
  logout(uname:string){
    this.loginService.logout(uname).subscribe(
      user=>{
        this.user=user;
        alert("logged out successfully");
    });
  }
}
