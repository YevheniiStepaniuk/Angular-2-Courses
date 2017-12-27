import { ProcessOrderComponent } from './core/components/process-order/process-order.component';
import { AboutComponent } from './core/components/about/about.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { PublicCartComponent } from './core/components/public-cart/public-cart.component';
import { LoginComponent } from './core/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: 'app/admin/admin.module#AdminModule',
    data: {
      title: 'Admin',
      preload: false
    }
  },
  {
    path: 'cart',
    loadChildren: 'app/cart/cart.module#CartModule',
    data: {
      preload: true,
      title: 'Cart'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'order',
    component: ProcessOrderComponent,
    data: { title: 'Make an order' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'public-cart',
    component: PublicCartComponent,
    outlet: 'popup'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
