import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {Order, OrderItem} from '../../shared/models/order';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class ManageOrdersComponent implements OnInit {
  public orders: Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().then(orders => this.orders = orders);
  }

}
