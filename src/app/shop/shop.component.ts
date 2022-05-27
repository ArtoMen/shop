import {Component, OnInit} from "@angular/core";
import {CartService} from "../core/services/cart.service";
import {Observable} from "rxjs";
import {CartItem} from "../core/interfaces/interfaces";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  cart$!: Observable<CartItem[]>;

  constructor(
    private cart: CartService
  ) {
  }

  ngOnInit() {
    this.cart$ = this.cart.getCart();
  }

}

