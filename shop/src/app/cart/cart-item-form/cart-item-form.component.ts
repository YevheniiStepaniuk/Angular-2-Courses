import {Component, OnInit, OnDestroy} from '@angular/core';
import {CartItem} from '../../shared/models/cartItem';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DialogService} from './../../shared/services/dialog.service';
import {CanComponentDeactivate} from './../../shared/interfaces/can-component-deactivate';
import { InternalCartService } from '../services/internal-cart.service';


@Component({
  templateUrl: './cart-item-form.component.html'
})
export class CartItemFormComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  cartItem: CartItem;
  originalCartItem: CartItem;

  constructor(private cartArrayService: InternalCartService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.cartItem = new CartItem(null, '', 0);

    this.route.data.subscribe(data => {
      this.cartItem = {...data.cartItem};
      this.originalCartItem = {...data.cartItem};
    });

  }

  ngOnDestroy(): void {
  }

  saveCartItem() {
    const cartItem = {...this.cartItem};

    if (cartItem.id) {
      this.cartArrayService.update(cartItem);
      this.router.navigate(['/cart', {id: cartItem.id}]);
    } else {
      this.cartArrayService.add(cartItem);
      this.goBack();
    }
    this.originalCartItem = {...this.cartItem};


  }

  goBack() {
    this.router.navigate(['./../../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const flags = Object.keys(this.originalCartItem).map(key => {
      if (this.originalCartItem[key] === this.cartItem[key]) {
        return true;
      }
      return false;
    });

    if (flags.every(el => el)) {
      return true;
    }

    return this.dialogService.confirm('Discard changes?');
  }

}

