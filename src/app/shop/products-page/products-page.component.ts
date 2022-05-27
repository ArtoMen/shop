import { Component } from '@angular/core';
import { ProductsService } from "../../core/services/products.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {

  constructor(public productService: ProductsService) {
  }
}


