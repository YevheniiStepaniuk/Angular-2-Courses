import { CoreModule } from './core/core.module';
import { PublicCartComponent } from './core/components/public-cart/public-cart.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ConstantsService} from './shared/services/constants.service';
import {GeneratorService} from './shared/services/generator.service';
import {ConfigOptionsService} from './shared/services/config-options.service';
import {FontChangerDirective} from './shared/directives/font-changer.directive';
import {LocalStorageService} from './shared/services/local-storage.service';
import {Router} from '@angular/router';
import { AppRoutingModule} from './app.routing.module';
import {AuthService, DialogService, CartService} from './shared/services';
import {AuthGuard} from './shared/guards/auth.guard';
import {ProductsModule} from './products/products.module';
import {OrderService} from './shared/services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    FontChangerDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    AppRoutingModule,
    CoreModule
  ],
  exports: [
    FontChangerDirective,
  ],
  providers: [
    ConfigOptionsService,
    {provide: ConstantsService, useValue: new ConstantsService()},
    {provide: GeneratorService, useFactory: () => new GeneratorService(10)},
    LocalStorageService,
    CartService, AuthGuard, DialogService, AuthService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
