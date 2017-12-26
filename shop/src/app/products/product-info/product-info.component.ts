import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../shared/models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html'
})
export class ProductInfoComponent implements OnInit {

  product: Product;

  constructor(private productArrayService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.product = new Product(null, '', null, null);

    this.route.paramMap
      .switchMap((params: Params) => this.productArrayService.get(+params.get('id')))
      .subscribe(
      product => this.product = Object.assign({}, product),
      err => console.log(err)
      );

  }


  goBack(): void {
    this.router.navigate(['/home']);
  }
}
