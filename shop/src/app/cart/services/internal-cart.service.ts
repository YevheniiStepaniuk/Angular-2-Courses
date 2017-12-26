import {Injectable, OnInit} from '@angular/core';

import {CartItem} from '../../shared/models/cartItem';
import {CartService} from '../../shared/services';
import {Product} from '../../shared/models/product';

@Injectable()
export class InternalCartService {

  constructor(private publicCartService: CartService) {
  }

  getAll(): Promise<CartItem[]> {
    return this.publicCartService.getAllAsync();
  }

  get(id: number | string): Promise<CartItem> {
    return this.publicCartService.getAllAsync()
      .then(cartItems => cartItems.find(cartItem => cartItem.id === +id))
      .catch(() => Promise.reject('Error in getCartItem method'));
  }

  add(cartItem: CartItem): void {
    this.publicCartService.add(new Product(cartItem.id, cartItem.name, -1, -1));
  }

  update(cartItem: CartItem): void {
    this.publicCartService.update(cartItem);

  }
}
