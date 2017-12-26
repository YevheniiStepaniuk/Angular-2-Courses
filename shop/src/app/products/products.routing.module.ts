import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductInfoComponent } from './product-info/product-info.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent,
    data: {
      title: 'Product Manager',
      meta: [{
        name: 'description',
        content: 'Product Manager Application'
      },
      {
        name: 'keywords',
        content: 'Angular 5, Routing'
      }]
    }

  },
  {
    path: 'edit',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add',
    component: ProductFormComponent
  },
  {
    path: 'edit/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:id',
    component: ProductInfoComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
