import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Product } from '../../shared/models/product';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit, OnDestroy {

  product: Product;

  constructor(private productArrayService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.product = new Product(null, '', null, null);

    // it is not necessary to save subscription to route.paramMap
    // it handles automatically
    this.route.paramMap
      .switchMap((params: Params) => this.productArrayService.get(+params.get('id')))
      .subscribe(
      product => this.product = Object.assign({}, product),
      err => console.log(err)
      );

  }

  ngOnDestroy(): void {
  }

  saveProduct() {
    const product = { ...this.product };

    if (product.id) {
      this.productArrayService.update(product);
    } else {
      this.productArrayService.add(product);
    }

    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
