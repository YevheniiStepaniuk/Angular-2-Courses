import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { CartItem } from '../../../shared/models/cart-item.model';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent implements OnInit {
  @Input() productCount: number;
  @Input() product: Product;
  @Output() deleteOne: EventEmitter<Product> = new EventEmitter();
  @Output() deleteAll: EventEmitter<CartItem> = new EventEmitter();

  @HostBinding('class.selected-item') appliedStyle: boolean;
  constructor() { }

  ngOnInit() { }

  onDeleteOne() {
    this.deleteOne.emit(this.product);
  }

  onDeleteAll() {
    this.deleteAll.emit({ product: this.product, count: this.productCount });
  }

  @HostListener('mouseenter') changeBackgroundOnMouseEnter() {
    this.appliedStyle = true;
  }

  @HostListener('mouseleave') changeBackBackgroundOnMouseLeave() {
    this.appliedStyle = false;
  }

  callThiMethodFromParentComponent() {
    console.log('added +1 to count for product: ' + this.product);
  }

}
