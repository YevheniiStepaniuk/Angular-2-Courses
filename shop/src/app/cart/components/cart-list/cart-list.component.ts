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
  @Output() orderCreating = new EventEmitter();
  public totalPrice = 0;
  public totalCount = 0;
  private subscription: Subscription;

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.subscription = this.cartService.onChange.subscribe(
      (data: CartItem[]) => this.products = data,
      (err) => console.log(err)
    );

    this.subscription.add(this.cartService.onCountChanges.subscribe(
      (data: number) => this.totalCount = data,
      (err) => console.log(err)
    ));

    this.subscription.add(this.cartService.onPriceChanges.subscribe(
      (data: number) => this.totalPrice = data,
      (err) => console.log(err)
    ));
  }
  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onBuy(): void {
    this.orderCreating.next(this.cartService.createOrder());
  }

  onDeleteAll(cartItem: CartItem) {
    this.cartService.deleteItem(cartItem);
  }

  onDeleteOne(product: Product) {
    this.cartService.deleteItem({ product: product, count: 1 });
  }

}
