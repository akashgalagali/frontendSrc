import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../models/products';
import { ProductServiceService } from '../product-service.service';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { LandServiceService } from '../land-service.service';
import { Land } from '../models/Land';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products:Products[]; 
  productCount:number;
  lands:Land[]; 
  landCount:number;
  dataGraph:number[]=[10, 8,2, 41, 15, 55, 5,0];
  constructor(private productService:ProductServiceService,private landService:LandServiceService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.countProduct();
    this.countLand();
  }
  countProduct(){
    this.productService.getAllProduct().subscribe(
      products=>{
        this.products=products;
        this.productCount=this.products.length;
        this.dataGraph[2]=this.productCount;      
      }
    );
    
  }
  countLand(){
    this.landService.getAllLand().subscribe(
      lands=>{
        this.lands=lands;
        this.landCount=this.lands.length;
        this.dataGraph[5]=this.landCount;      
      }
    );
    
  }
 
  
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Customers', 'Contracts', 'Products', 'Orders', 'Schedulers', 'Lands', 'Admins'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: this.dataGraph, label: 'Data',backgroundColor: [
      'rgba(0,255, 0, 1)',
      'rgba(0,255, 0, 1)',
      'rgba(0,255, 0, 1)',
      'rgba(0,255, 0, 1)',
      'rgba(0,255, 0, 1)',
      'rgba(0,255, 0, 1)',
      'rgba(0,255, 0, 1)',
      
    ], },
   
  ];
  

    
}
