import { Component, Input } from '@angular/core';

import { CartItem } from '../../shared/models/cartItem';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem: CartItem;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }


  edit() {
    const link = ['/cart/edit', this.cartItem.id];
    this.router.navigate(link);

  }
}
