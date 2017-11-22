import { Component, ViewChild } from '@angular/core';
import { Product } from './shared/models/product.model';
import { CartService } from './cart/services/cart.service';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(CartListComponent) cart: CartListComponent;
  @ViewChild('productList') productList: ProductListComponent;
  constructor(private cartService: CartService){}
  onBuy(product: Product) {
    this.cartService.addProduct(product);
  }
}
