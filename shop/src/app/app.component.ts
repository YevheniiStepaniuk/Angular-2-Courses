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
  @ViewChild(CartListComponent) cart: CartListComponent;
  @ViewChild('productList') productList: ProductListComponent;
  public about: any;
  constructor(private cartService: CartService,
    @Inject(ConstantsServiceToken) constantsService: ConstantsService,
    @Optional() public configService: ConfigOptionsService
  ) {
    console.log(constantsService);
    this.about = constantsService.getConst();
    if (!!configService) {
      configService.configure({
        login: 'admin',
        password: 'admin'
      });
    }
  }
  onBuy(product: CartItem) {
    this.cartService.addProduct(product);
  }

  logToConsole(data: any) {
    console.log(data);
  }
}
