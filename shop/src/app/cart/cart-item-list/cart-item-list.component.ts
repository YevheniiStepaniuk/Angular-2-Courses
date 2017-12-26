import {Component, OnInit, OnDestroy} from '@angular/core';

import {CartItem} from '../../shared/models/cartItem';
import {ActivatedRoute, Params} from '@angular/router';
import {CartService} from '../../shared/services';
import {OrderService} from '../../shared/services/order.service';
import {Order, OrderItem} from '../../shared/models/order';
import { InternalCartService } from '../services/internal-cart.service';

@Component({
  templateUrl: './cart-item-list.component.html'
})
export class CartItemListComponent implements OnInit, OnDestroy {
  cartItems: Array<CartItem>;
  private editedCartItem: CartItem;

  constructor(private cartArrayService: InternalCartService,
              private route: ActivatedRoute,
              private publicCartService: CartService,
              private os: OrderService) {
  }


  ngOnInit() {
    this.cartArrayService.getAll()
      .then(cartItems => this.cartItems = [...cartItems])
      .catch(err => console.log(err));

    // listen id from CartItemFormComponent
    this.route.paramMap
      .switchMap((params: Params) => this.cartArrayService.get(+params.get('id')))
      .subscribe(
        (cartItem: CartItem) => {
          this.editedCartItem = {...cartItem};
          console.log(`Last time you edit user ${JSON.stringify(this.editedCartItem)}`);
        },
        err => console.log(err)
      );
  }


  ngOnDestroy() {
  }

  isEdited(user: CartItem) {
    if (this.editedCartItem) {
      return user.id === this.editedCartItem.id;
    }
    return false;
  }

  placeOrder(): void {
    // free up the cart
    this.publicCartService.clear();
    // save order
    const orderItems = new Array<OrderItem>();
    for (const item of this.cartItems){
      orderItems.push(new OrderItem(item.name, item.numberInCart));
    }

    this.os.placeOrder(new Order(-1, orderItems));
  }
}
