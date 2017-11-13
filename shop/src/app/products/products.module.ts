import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list-componen/product-list.component';
import { ProductsService } from './services/products.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ProductComponent, ProductListComponent ],
  exports: [ProductComponent, ProductListComponent],
  providers: [ProductsService]
})
export class ProductModule { }
