import { Injectable } from '@angular/core';

import { Product } from '../../shared/models/product';

const productList = [
  new Product(1, 'Banana', 1, 18, 'Regular banana'),
  new Product(2, 'Apple', 2, 12, 'Some fresh apples'),
  new Product(3, 'Carrot', 3, 8, 'Very healthy food')
];

const productListPromise = Promise.resolve(productList);

@Injectable()
export class ProductService {

  getAll(): Promise<Product[]> {
    return productListPromise;
  }

  get(id: number | string): Promise<Product> {
    return this.getAll()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getproduct method'));
  }

  add(product: Product): void {
    productList.push(product);
  }

  update(product: Product): void {
    let i = -1;

    productList.forEach((item, index) => {
      if (item.id === product.id) {
        i = index;
        return false;
      }
    });

    if (i > -1) {
      productList.splice(i, 1, product);
    }
  }
}
