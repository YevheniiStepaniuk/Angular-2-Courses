import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { CategoryEnum } from '../../../shared/models/category.enum';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { Equivalent } from '../../../shared/models/equivalent.model';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../../shared/models/cart-item.model';

@Component({
  selector: 'cart-lits',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() products: CartItem[];
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.products = new Array();
    this.cartService.onRecieve.subscribe(
      (data: Product) => {
        if (!!data) {
          const item = this.products.find((cartItem: CartItem) => cartItem.product.name === data.name);
          if (!!item) {
            item.count++;
          } else {
            this.products.push({ product: data, count: 1 });
          }
        }
      },
      (err) => console.log(err)
    );
  }
}
