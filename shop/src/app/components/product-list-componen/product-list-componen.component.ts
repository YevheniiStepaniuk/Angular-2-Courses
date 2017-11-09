import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'products-list',
  templateUrl: './product-list-componen.component.html',
  styleUrls: ['./product-list-componen.component.scss']
})
export class ProductListComponenComponent implements OnInit {

  products: Array<Product>;
  @Output() onBuy: EventEmitter<Product> = new EventEmitter();
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      (data) => this.products = data,
      (err) => console.log(err)
    );
  }
}
