import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ViewappComponent } from './viewapp/viewapp.component';


const routes: Routes = [
  // {
  //   path: 'view/:id',
  //   component: ViewappComponent
  // }

  
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
