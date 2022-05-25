import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../shared/services/products.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { switchMap, take } from "rxjs";
import { Product } from "../../shared/interfaces/interfaces";

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((e: Params) => this.products.findById(Number(e['id']))),
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

}
