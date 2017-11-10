import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { CategoryEnum } from '../../shared/models/category.enum';
import { Ingredient } from '../../shared/models/ingredient.model';
import { Equivalent } from '../../shared/models/equivalent.model';
import { Product } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() products: Product[];
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.products = new Array();
    this.cartService.onRecieve.subscribe(
      (data) => {
        if (!!data) {
          this.products.push(data);
        }
      },
      (err) => console.log(err)
    );
  }
}
