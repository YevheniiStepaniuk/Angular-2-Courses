import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicCartComponent } from './components/public-cart/public-cart.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent, LoginComponent, PageNotFoundComponent, PublicCartComponent],
  exports: [AboutComponent, LoginComponent, PageNotFoundComponent, PublicCartComponent]
})
export class CoreModule { }
