import { Component, ViewChild } from '@angular/core';
import { Product } from './shared/models/product.model';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(CartComponent) cart: CartComponent;
  onBuy($event: Product){
    this.cart.add($event);
  }
}
