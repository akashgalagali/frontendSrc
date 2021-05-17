import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandServiceService } from '../land-service.service';
import { Land } from '../models/Land';

@Component({
  selector: 'app-adminland-list',
  templateUrl: './adminland-list.component.html',
  styleUrls: ['./adminland-list.component.css']
})
export class AdminlandListComponent implements OnInit {
  lands:Land[];
  constructor(private landService:LandServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadLanddata();
  }
reloadLanddata(){
  this.landService.getAllLand().subscribe(
    lands=>{
      this.lands=lands;
    }
  );
}
  deleteLand(lid:string){
    this.landService.deleteLand(lid).subscribe(
      result=>{
      },
      error=>console.log(error)
    );
    alert("Land Deleted successfuly");
    this.reloadLanddata();
  }
  

}
