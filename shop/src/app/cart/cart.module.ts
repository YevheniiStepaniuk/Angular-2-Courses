import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ CartListComponent, CartItemComponent ],
  exports: [
    CartListComponent,
    CartService
   ],
  providers: [CartService]
})
export class CartModule { }
