import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartItemsRoutingModule, cartItemsRouterComponents } from './cart.routing.module';
import { InternalCartService } from './services/internal-cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CartItemsRoutingModule
  ],
  declarations: [
    cartItemsRouterComponents,
    CartItemComponent
  ],
  providers: [
    InternalCartService]
})
export class CartModule {
}
