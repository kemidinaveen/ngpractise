import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewappRoutingModule } from './viewapp-routing.module';
import { ViewappComponent } from './viewapp.component';


@NgModule({
  declarations: [ViewappComponent],
  imports: [
    CommonModule,
    ViewappRoutingModule
  ]
})
export class ViewappModule { }
