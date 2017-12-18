import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    CartModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
