import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [CommonModule, SharedModule],
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
