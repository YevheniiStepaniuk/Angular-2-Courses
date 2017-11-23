import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, field: string, desc: boolean = false) {
    return value.sort((a, b) => {
      if (a[field] < b[field]) {
        return desc ? 1 : -1;
      }
      if (a[field] > b[field]) {
        return desc ? -1 : 1;
      }
      return 0;
    });
  }

}
