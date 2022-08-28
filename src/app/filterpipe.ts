import { Pipe } from '@angular/core';


// @Pipe({
//     name:"filter"
// })

export class Filterpipe {

    transform(array:string[],startWith:string):any{
        let temp:string[]=[];
        temp=array.filter(a=>a.startsWith(startWith));
        return temp;
      }
}
