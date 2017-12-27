import { OrderByPipe } from './orderby.pipe';

describe('OrderByPipe', () => {
    let sut;
    let data;
    beforeEach(() => {
        sut = new OrderByPipe();
        data = [{
            id: 1,
            name: '1'
        },
        {
            id: 3,
            name: '3'
        },
        {
            id: 2,
            name: '2'
        }];
    });

    it('should order data by id', () => {
        const expectData = [{
            id: 1,
            name: '1'
        },
        {
            id: 2,
            name: '2'
        },
        {
            id: 3,
            name: '3'
        }];
        const result = sut.transform(data, 'id', true);
        expect(result).toEqual(expectData);
    });

    it('should order by name desc', () => {
        const expectData = [{
            id: 3,
            name: '3'
        },
        {
            id: 2,
            name: '2'
        },
        {
            id: 1,
            name: '1'
        }];
        const result = sut.transform(data, 'name');
        expect(result).toEqual(expectData);
    });
});
