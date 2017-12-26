import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard } from '../shared/guards/can-deactivate.guard';
import { CartResolveGuard } from '../shared/guards/cart-resolve.guard';
import { CartItemsComponent } from './cart-items.component';
import { CartItemFormComponent } from './cart-item-form/cart-item-form.component';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';

const routes: Routes = [
  {
    path: '',
    component: CartItemsComponent,
    children: [
      {
        path: 'add',
        component: CartItemFormComponent
      },
      {
        path: 'edit/:id',
        component: CartItemFormComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          cartItem: CartResolveGuard
        }

      },
      {
        path: '',
        component: CartItemListComponent
      },
    ]
  }
];

export let cartItemsRouterComponents = [CartItemsComponent, CartItemListComponent, CartItemFormComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    CartResolveGuard
  ]
})
export class CartItemsRoutingModule {
}
