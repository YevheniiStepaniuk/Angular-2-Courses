import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
