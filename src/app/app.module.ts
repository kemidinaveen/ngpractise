import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {RlTagInputModule} from 'angular2-tag-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSliderModule } from '@angular/material/slider';

import { RouterModule } from '@angular/router';
import bootstrap from "bootstrap";
import { Filterpipe } from './filterpipe';
import { FilterPipe } from './filter.pipe';
import { ViewappComponent } from './viewapp/viewapp.component';
import { ProductsComponent } from './products/products.component';

// import {MatChipsModule} from '@angular/material/chips';
// import { MatFormFieldModule, MatIconModule } from '@angular/material';
// import {MatNativeDateModule} from '@angular/material/core';
// import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    AppComponent,
    ViewappComponent,
    FilterPipe,
    ProductsComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{
      path:"products",component:ProductsComponent
    }]),

    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
