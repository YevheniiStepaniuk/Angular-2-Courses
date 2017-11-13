import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ CartComponent ],
  exports: [
    CartComponent,
    CartService
   ],
  providers: [CartService]
})
export class CartModule { }
