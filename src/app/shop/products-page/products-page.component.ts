import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../shared/services/products.service";
import { Observable } from "rxjs";
import { Product } from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  get products(): Observable<Product[]> {
    return this.productService.getProducts();
  }

}
