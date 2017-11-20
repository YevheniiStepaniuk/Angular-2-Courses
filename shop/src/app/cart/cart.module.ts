import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ BrowserModule, CommonModule ],
  declarations: [ CartListComponent, CartItemComponent ],
  exports: [
    CartListComponent,
    CartItemComponent
   ],
   providers: [CartService]
})
export class CartModule { }
