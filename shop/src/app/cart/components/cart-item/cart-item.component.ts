import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { CartItem } from '../../../shared/models/cart-item.model';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent implements OnInit {
  @Input() productQuantity: number;
  @Input() productName: string;
  @Output() onDeleteCartItem = new EventEmitter();
  @HostBinding('class.selectedCartItem') appliedStyle: boolean;
  constructor() { }

  ngOnInit() { }

  deleteCartItem(event: Event) {
    this.onDeleteCartItem.emit(event);
  }

  @HostListener('mouseenter') changeBackgroundOnMouseEnter() {
    this.appliedStyle = true;
  }

  @HostListener('mouseleave') changeBackBackgroundOnMouseLeave() {
    this.appliedStyle = false;
  }

  callThiMethodFromParentComponent() {
    console.log('added +1 to quantity for product: ' + this.productName);
  }

}
