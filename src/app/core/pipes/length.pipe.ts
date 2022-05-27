import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform{
  transform(array: any[] | null): number {
    return array!.length;
  }
}
