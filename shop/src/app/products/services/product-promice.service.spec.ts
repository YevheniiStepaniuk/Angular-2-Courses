import { Resolve } from '@angular/router';
import { ProductPromiseService } from './product-promice.service';
import { Observable } from 'rxjs/Observable';
import { async } from 'q';

describe('ProductPromiseService', () => {
    let sut;
    let http;
    let data;
    beforeEach(() => {
        data = [
            {id: 1, name: '1'},
            {id: 2, name: '2'},
        ];
        http = jasmine.createSpyObj('httpClient', ['get']);
        http.get = jasmine.createSpy('get').and.returnValue(Observable.of(data));
        sut = new ProductPromiseService(http);
    });

    it('should return data', () => {
        sut.getProducts().then(value => {
          expect(value).toEqual(data);
        });
    });
});
