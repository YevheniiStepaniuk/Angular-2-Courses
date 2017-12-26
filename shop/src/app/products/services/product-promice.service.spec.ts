import { ProductPromiseService } from './product-promice.service';

describe('OngoingModule:: UserTypePipe', () => {
    let sut;
    let http;
    let data;
    beforeEach(() => {
        data = [
            {id: 1, name: '1'},
            {id: 2, name: '2'},
        ];
        http = jasmine.createSpyObj('httpClient', ['get']);
        http.get = jasmine.createSpy('get').and.returnValue(Promise.resolve(data));
        sut = new ProductPromiseService(http);
    });

    it('should return data', () => {
        expect(sut.getProducts()).toEqual(data);
    });
});
