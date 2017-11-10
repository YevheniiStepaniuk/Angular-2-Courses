import { Component, ViewChild } from '@angular/core';
import { Product } from './shared/models/product.model';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cartService: CartService){}
  onBuy($event: Product){
    this.cartService.addProduct($event);
  }
}
