import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponenComponent } from './components/product-list-componen/product-list-componen.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsService } from './shared/services/products.service';
import { CartService } from './shared/services/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponenComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
