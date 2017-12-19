import { Observable } from 'rxjs/Observable';
import { Order } from './../../shared/models/order.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdersService {
  private changeSubject = new BehaviorSubject<Order[]>([]);
  public onChange: Observable<Order[]> = this.changeSubject.asObservable();
  addOrder(order: Order) {
    if (!!order) {
      this.changeSubject.next([...this.changeSubject.value, order]);
    }
  }
}
