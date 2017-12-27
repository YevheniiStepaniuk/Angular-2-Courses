import { OrderService } from './shared/services/order.service';
import { AuthService } from './shared/services/auth.service';
import { DialogService } from './shared/services/dialog.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { CartService } from './shared/services/public-cart.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { ConstantsService } from './shared/services/constants.service';
import { GeneratorService } from './shared/services/generator.service';
import { ConfigOptionsService } from './shared/services/config-options.service';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';


import { AppRoutingModule } from './app.routing.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        ProductsModule,
        AppRoutingModule,
        CoreModule
      ],
      providers: [
        ConfigOptionsService,
        { provide: ConstantsService, useValue: new ConstantsService() },
        { provide: GeneratorService, useFactory: () => new GeneratorService(10) },
        LocalStorageService,
        CartService, AuthGuard, DialogService, AuthService,
        OrderService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
