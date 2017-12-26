import { Component, OnInit } from '@angular/core';

import { Product } from '../../shared/models/product';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private productArrayService: ProductService) { }

  ngOnInit() {
    console.log(this.products);
    this.productArrayService.getAll()
      .then(prods => this.products = prods)
      .catch((err) => console.log(err));
  }

}
