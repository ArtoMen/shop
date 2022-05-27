import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CartItem, CheckoutInfo} from "../../core/interfaces/interfaces";
import {CartService} from "../../core/services/cart.service";
import {CheckoutService} from "../../core/services/checkout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  public cart!: Observable<CartItem[]>;
  public checkout!: Observable<CheckoutInfo>;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.checkout = this.checkoutService.getInfo();
  }

  buy() {
    this.checkoutService.createOrder();
    this.cartService.deleteAll();
    this.router.navigate(['/shop/purchase']).catch(err => console.log(err));
  }
}
