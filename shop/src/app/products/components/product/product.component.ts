import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CategoryEnum } from '../../../shared/models/category.enum';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { Equivalent } from '../../../shared/models/equivalent.model';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() model: Product;
  @Output() onBuy: EventEmitter<Product> = new EventEmitter();
}
