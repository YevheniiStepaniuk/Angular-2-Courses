import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicCartComponent } from './components/public-cart/public-cart.component';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [AboutComponent, LoginComponent, PageNotFoundComponent, PublicCartComponent, ProcessOrderComponent],
  exports: [AboutComponent, LoginComponent, PageNotFoundComponent, PublicCartComponent, ProcessOrderComponent]
})
export class CoreModule { }
