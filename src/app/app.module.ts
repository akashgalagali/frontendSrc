import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductServiceService } from './product-service.service';
import { ChartsModule } from 'ng2-charts';
import { AdminlandListComponent } from './adminland-list/adminland-list.component';
import { LandServiceService } from './land-service.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminProductListComponent,
    AdminlandListComponent,
    LoginComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
   
  ],
  providers: [ProductServiceService,LandServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
