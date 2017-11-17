import { Injectable } from '@angular/core';
import { Product, IProduct } from '../../shared/models/product.model';
import { Observable } from 'rxjs/Observable';
import { CategoryEnum } from '../../shared/models/category.enum';

@Injectable()
export class ProductsService {
  public getProducts(): Observable<IProduct[]> {
    return Observable.create((observer) => {
      observer.next([
        {
          name: 'Test 1',
          price: 90,
          category: CategoryEnum.sport,
          description: 'Test 1 descroption',
          isAvailable: true,
          ingredients: [
            { title: 'ingredient 1' },
            { title: 'ingredient 2' },
            { title: 'ingredient 3' }
          ],
          equivalents: [
            { title: 'Test 2' },
            { title: 'Test 3' },
          ]
        },
        {
          name: 'Test 2',
          price: 95,
          category: CategoryEnum.sport,
          description: 'Test 2 descroption',
          isAvailable: true,
          ingredients: [
            { title: 'ingredient 2' },
            { title: 'ingredient 3' }
          ],
          equivalents: [
            { title: 'Test 1' },
            { title: 'Test 3' },
          ]
        },
        {
          name: 'Test 3',
          price: 190,
          category: CategoryEnum.sport,
          description: 'Test 3 descroption',
          isAvailable: true,
          ingredients: [
            { title: 'ingredient 1' },
            { title: 'ingredient 2' },
            { title: 'ingredient 4' },
            { title: 'ingredient 3' }
          ],
          equivalents: [
            { title: 'Test 1' },
            { title: 'Test 3' },
          ]
        }
      ]);
      observer.complete();
    });
  }
}
