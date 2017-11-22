import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() onBuy: EventEmitter<Product> = new EventEmitter();
}
