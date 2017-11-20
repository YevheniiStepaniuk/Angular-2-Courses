import { CartItemComponent } from './../cart-item/cart-item.component';
import { Component, Input, EventEmitter, Output, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { CategoryEnum } from '../../../shared/models/category.enum';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { Equivalent } from '../../../shared/models/equivalent.model';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../../shared/models/cart-item.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  @Input() products: CartItem[];
  @ViewChildren('cartItems') cartItems: QueryList<CartItemComponent>;
  @Output() onCartItemDeleted = new EventEmitter();
  public totalPrice = 0;
  private subscription: Subscription;
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
          this.recalculateTotalPrice();
        }
      },
      (err) => console.log(err)
    );
  }
  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onBuy(): void {
    console.log('buy');
  }

  deleteCartItem(event: Event, productToDelete: string) {
    const itemToDelete = this.products.find((cartItem: CartItem) => cartItem.product.name === productToDelete);

    if (!!itemToDelete) {

      this.onCartItemDeleted.emit(productToDelete);

      if (itemToDelete.count > 1) {
        itemToDelete.count--;
      } else {
        const index = this.products.indexOf(itemToDelete);
        this.products.splice(index, 1);
      }
    }

    this.recalculateTotalPrice();
  }

  private recalculateTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice(this.products);
  }
}
