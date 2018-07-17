import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';

import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  //providers: [ProductService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
