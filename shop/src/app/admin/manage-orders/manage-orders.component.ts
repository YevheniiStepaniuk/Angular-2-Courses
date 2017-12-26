import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {Order, OrderItem} from '../../shared/models/order';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class ManageOrdersComponent implements OnInit, OnDestroy {
  public orders: Order[];
  private subscription: Subscription;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.subscription = this.orderService.getOrders().subscribe(orders => this.orders = orders, error => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
