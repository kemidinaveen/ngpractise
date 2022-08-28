import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,exponent:number=1): any {
    return Math.pow(value,exponent);
  }

}
