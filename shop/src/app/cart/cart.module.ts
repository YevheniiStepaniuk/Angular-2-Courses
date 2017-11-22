import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CartItemComponent,
    CartListComponent
  ],
  exports: [
    CartListComponent
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
