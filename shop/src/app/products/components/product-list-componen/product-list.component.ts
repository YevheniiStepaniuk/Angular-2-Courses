import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

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
