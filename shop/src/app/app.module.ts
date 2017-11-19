import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './products/products.module';


@NgModule({
  declarations: [
    AppComponent,
    CartModule,
    ProductModule
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
