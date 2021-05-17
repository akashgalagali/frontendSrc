import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../models/products';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products:Products[];

  constructor(private productService:ProductServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadProductdata();
  }
reloadProductdata(){
  this.productService.getAllProduct().subscribe(
    products=>{
      this.products=products;
    }
  );
}
  deleteProduct(pid:number){
    this.productService.deleteProduct(pid).subscribe(
      result=>{
      },
      error=>console.log(error)
    );
    alert("Product Deleted successfuly");
    this.reloadProductdata();
  }
  
}
