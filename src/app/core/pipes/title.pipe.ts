import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string, length: number): string {
    if(value.length > length - 3) {
      value = value.slice(0, length - 3);
      value += '...';
    }
    return value;
  }
}
