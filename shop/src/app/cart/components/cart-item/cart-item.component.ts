import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { CartItem } from '../../../shared/models/cart-item.model';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent implements OnInit {
  @Input() productCount: number;
  @Input() productName: string;
  @Output() delete = new EventEmitter();
  @HostBinding('class.selected-item') appliedStyle: boolean;
  constructor() { }

  ngOnInit() { }

  onDelete(event: Event) {
    this.delete.emit(event);
  }

  @HostListener('mouseenter') changeBackgroundOnMouseEnter() {
    this.appliedStyle = true;
  }

  @HostListener('mouseleave') changeBackBackgroundOnMouseLeave() {
    this.appliedStyle = false;
  }

  callThiMethodFromParentComponent() {
    console.log('added +1 to count for product: ' + this.productName);
  }

}
