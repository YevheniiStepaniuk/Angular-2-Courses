import { CartListComponent } from './components/cart-list/cart-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: 'cart',
      component: CartListComponent
    }])
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }
