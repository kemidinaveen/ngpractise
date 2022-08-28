import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewappComponent } from '../viewapp/viewapp.component';
import { ProductsComponent } from './products.component';


const routes: Routes = [
    {
    path: 'view/:id',
    component: ViewappComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
