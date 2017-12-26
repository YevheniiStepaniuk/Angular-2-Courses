import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../products/services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html'
})
export class ManageProductsComponent implements OnInit {

  productList: Array<Product>;

  constructor(private prodService: ProductService) { }

  ngOnInit() {
    this.prodService.getAll()
      .then(product => this.productList = [...product])
      .catch(err => console.log(err));
  }

  deleteProduct(product: Product) {
    this.productPromiseService.deleteProduct(product)
      .then(() => this.productList = this.productList.filter(t => t !== product))
      .catch(err => console.log(err));
  }

  createProduct() {
    const link = ['/add'];
    this.router.navigate(link);
  }

}
