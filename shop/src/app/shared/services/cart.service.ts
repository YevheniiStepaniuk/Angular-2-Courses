import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class CartService {
  private recieveSubject = new BehaviorSubject<Product>(null);
  public onRecieve: Observable<Product> = this.recieveSubject.asObservable();
  constructor() { }

  addProduct(product: Product) {
    this.recieveSubject.next(product);
  }

}
