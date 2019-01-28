import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<any>, field: string): Array<string> {
    if (array && array.length && array[0][field] && this.isDate(array[0][field])) {
      array.sort((a: any, b: any) => {
        const aMs = a[field].getTime();
        const bMs = b[field].getTime();
        if (aMs < bMs) {
          return -1;
        } else if (aMs > aMs) {
          return 1;
        } else {
          return 0;
        }
      })
    }
    return array;
  }

  private isDate(d: any): boolean {
    return d.constructor === Date;
  }
}
