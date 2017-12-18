import { Subscription } from 'rxjs/Subscription';
import { Component, ViewChild, Inject, Optional } from '@angular/core';
import { Product } from './shared/models/product.model';
import { CartService } from './cart/services/cart.service';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CartItem } from './shared/models/cart-item.model';
import { ConstantsService, ConstantsServiceToken } from './shared/services/constants.service';
import { ConfigOptionsService } from './shared/services/config-options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private subscription: Subscription;
  constructor(private cartService: CartService,
  ) {
  }
  onBuy(product: CartItem) {
    this.cartService.addProduct(product);
    console.log(product);
  }

  logToConsole(data: any) {
    console.log(data);
  }

  public onActivate($event) {
    console.log('Activated Component', $event);
    if ($event instanceof ProductListComponent) {
      this.subscription = (<ProductListComponent>$event).onBuy.subscribe(this.onBuy.bind(this));
    }
  }
  public onDeactivate($event) {
    if ($event instanceof ProductListComponent && !!this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log('Deactivated Component', $event);
  }
}
