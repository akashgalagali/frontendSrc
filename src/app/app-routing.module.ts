import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminlandListComponent } from './adminland-list/adminland-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'products',component:AdminProductListComponent},
  {path:'adminDashboard',component:AdminComponent},
  {path:'lands',component:AdminlandListComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
