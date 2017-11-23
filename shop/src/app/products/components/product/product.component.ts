import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CartItem } from '../../../shared/models/cart-item.model';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() onBuy: EventEmitter<CartItem> = new EventEmitter();
  public count = 1;
}
