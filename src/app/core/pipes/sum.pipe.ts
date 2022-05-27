import {Pipe, PipeTransform} from "@angular/core";
import {ProductCart} from "../interfaces/interfaces";

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  transform(array: ProductCart[]): number {
    return array.reduce((acc:number, elem) => acc + elem.cost * elem.count, 0);
  }

}
