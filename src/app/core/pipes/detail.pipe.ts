import { Pipe, PipeTransform } from '@angular/core';
import {CartItem, ProductCart} from "../interfaces/interfaces";
import {ProductsService} from "../services/products.service";

@Pipe({
  name: 'detail'
})
export class DetailPipe implements PipeTransform {

  constructor(
    private productsService: ProductsService
  ) {
  }

  transform(items: CartItem[] | null): ProductCart[] {
    return items!.map(item => {
      const elem = this.productsService.findById(item.id);
      return {...elem, ...item} as ProductCart;
    });
  }

}
