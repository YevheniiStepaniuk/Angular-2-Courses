import { CartItem } from './../../shared/models/cart-item.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../shared/models/product.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class CartService {
  private changeSubject = new BehaviorSubject<CartItem[]>([]);
  public onChange: Observable<CartItem[]> = this.changeSubject.asObservable();
  private updatePriceSubject = new BehaviorSubject<number>(0);
  public onPriceChanges = this.updatePriceSubject.asObservable();
  private updateCountSubject = new BehaviorSubject<number>(0);
  public onCountChanges = this.updateCountSubject.asObservable();
  constructor() { }

  addProduct(cartItem: CartItem) {
    if (!!cartItem) {
      const cartItems = this.changeSubject.value;
      const item = cartItems.find((product: CartItem) => product.product.name === cartItem.product.name);
      if (!!item) {
        item.count += cartItem.count;
      } else {
        this.changeSubject.next([...cartItems, cartItem]);
      }
    }
    this.updateCountSubject.next(this.updateCountSubject.value + cartItem.count);
    this.updatePriceSubject.next(this.updatePriceSubject.value + cartItem.count * cartItem.product.price);
  }

  getTotalPrice(): number {
    return this.updatePriceSubject.value;
  }

  getTotalCount(): number {
    return this.updateCountSubject.value;
  }

  getAllItems() {
    return this.changeSubject.value;
  }

  clearCart() {
    this.updateCountSubject.next(0);
    this.updatePriceSubject.next(0);
  }

  deleteItem(product: CartItem) {
    if (!!product) {
      const cartItems = this.changeSubject.value;
      const item = cartItems.find((cartItem: CartItem) => product.product.name === cartItem.product.name);
      if (!!item) {
        if (item.count > product.count) {
          item.count--;
        } else {
          cartItems.splice(cartItems.indexOf(item), 1)
          this.changeSubject.next(cartItems);
        }
        this.updateCountSubject.next(this.updateCountSubject.value - product.count);
        this.updatePriceSubject.next(this.updatePriceSubject.value - (product.product.price * product.count));
      }
    }
  }

}
