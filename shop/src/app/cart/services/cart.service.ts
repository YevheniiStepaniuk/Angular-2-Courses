import { CartItem } from './../../shared/models/cart-item.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../shared/models/product.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class CartService {
  private recieveSubject = new BehaviorSubject<Product>(null);
  public onRecieve: Observable<Product> = this.recieveSubject.asObservable();
  constructor() { }

  addProduct(product: Product) {
    this.recieveSubject.next(product);
  }

  getTotalPrice(productsToBuy: CartItem[]): number {
    let sum = 0;
    for (const item of productsToBuy) {
      sum += item.product.price * item.count;
    }
    return sum;
  }

}
