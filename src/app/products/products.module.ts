import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ViewappComponent } from '../viewapp/viewapp.component';



@NgModule({
  declarations: [ProductsComponent,ViewappComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClient,
    RouterModule
  ]
})
export class ProductsModule { }
