import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../shared/models/product';
import { CartService } from '../../shared/services';

@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() product: Product;
  @Output() onComplete = new EventEmitter<Product>();

  constructor(private router: Router,
    private messagesService: CartService,
  ) {
  }

  addToCart() {
    this.messagesService.add(this.product);
  }

}
