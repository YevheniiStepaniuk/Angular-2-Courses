import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';

import {CartItem} from '../models/cartItem';
import { InternalCartService } from '../../cart/services/internal-cart.service';

@Injectable()
export class CartResolveGuard implements Resolve<CartItem> {

  constructor(private cartArrayService: InternalCartService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Promise<CartItem> | null {
    console.log('CartResolve Guard is called');
    const id = +route.paramMap.get('id');

    return this.cartArrayService.get(id).then(cartItem => {
      if (cartItem) {
        return Promise.resolve(cartItem);
      }

      // id not found
      this.router.navigate(['/cartItems']);
      return null;
    });
  }
}
