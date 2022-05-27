import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../core/services/products.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { take } from "rxjs";
import {CartItem, Product} from "../../core/interfaces/interfaces";
import {CartService} from "../../core/services/cart.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product: Product | undefined;
  count: number = 1;

  constructor(
    private products: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((e: Params) => this.products.findById(Number(e['id']))),
        take(1)
      )
      .subscribe((elem) => {
        if(!elem) {
          this.router.navigate(['/shop/products']).catch(err => console.log(err));
        }
        this.product = elem;
      });
  }

  increaseCount(): void {
    this.count++;
  }

  decreaseCount(): void {
    if(this.count === 1) return;
    this.count--;
  }

  addToCart(): void {
    if(!this.product) {
      return;
    }
    const item: CartItem = {
      id: this.product.id,
      count: this.count,
      orderNumber: Math.floor(Math.random() * 8999999) + 1000000,
      orderDate: new Date(),
    }
    this.cartService.addToCart(item);
    this.router.navigate(['/shop/cart']).catch(err => console.log(err));
  }
}
