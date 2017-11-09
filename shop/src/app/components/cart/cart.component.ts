import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { CategoryEnum } from '../../shared/models/category.enum';
import { Ingredient } from '../../shared/models/ingredient.model';
import { Equivalent } from '../../shared/models/equivalent.model';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() products: Product[];
  ngOnInit(): void {
    this.products = new Array();
  }

  add(product: Product): void {
    this.products.push(product);
  }
}
