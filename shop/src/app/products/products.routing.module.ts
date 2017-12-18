import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: 'products',
      component: ProductListComponent
    }])
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
