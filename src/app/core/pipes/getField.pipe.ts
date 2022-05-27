import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'getField'
})
export class GetFieldPipe implements PipeTransform {
  transform(obj: any, name: string): any {
    return obj[name];
  }

}
