import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './products/products.module';
import { ProductsService } from './products/services/products.service';
import { CartService } from './cart/services/cart.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
