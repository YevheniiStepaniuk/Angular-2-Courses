import { Component, ViewChild } from '@angular/core';
import { Product } from './shared/models/product.model';
import { CartComponent } from './cart/components/cart/cart.component';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(CartListComponent) cart: CartListComponent;
  @ViewChild('productList') productList: ProductListComponent;

  onBuy(product: CookedProduct) {
    product.itemsInStock--;
    this.cart.addProduct(product);
  }

  itemRemovedFromCart(productName: string) {
    this.productList.returnProduct(productName);
  }
}
