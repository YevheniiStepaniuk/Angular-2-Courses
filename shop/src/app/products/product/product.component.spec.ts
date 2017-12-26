import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductComponent } from './product.component';

describe('HeaderComponent', () => {
  let component: ProductComponent,
      fixture: ComponentFixture<ProductComponent>,
      de: DebugElement,
      el: HTMLElement;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ProductComponent]
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
    de = fixture.debugElement.query(By.css('ul>li:first-child'));
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
