import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'creditCart'
})
export class CreditCartPipe implements PipeTransform{
  transform(plainCreditCard: string): string {
    return plainCreditCard
      .replace(/(?<=.{4}).(?=.*....)/gm, '*')
      .replace(/(.{4})/gm, '$1 ')
      .trim();
  }
}
