import { Router } from '@angular/router';
import { CartService } from './../../shared/services/public-cart.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductComponent } from './product.component';

describe('Product component', () => {
  let component: ProductComponent,
      fixture: ComponentFixture<ProductComponent>,
      de: DebugElement,
      el: HTMLElement;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ProductComponent],
        providers: [CartService]
      })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    const product = {
        name: 'test'
    };
    component.product = product;
    de = fixture.debugElement.query(By.css('div>b>a:first-child'));
    el = de.nativeElement;
  });


  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.product.name);
  });

  it('should display a different test title', () => {
    component.product.name = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });
});
