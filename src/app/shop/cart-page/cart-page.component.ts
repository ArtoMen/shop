import { Component } from '@angular/core';
import { CartService } from "../../core/services/cart.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  constructor(
    public cartService: CartService,
  ) { }

  deleteItem(orderNumber: number): void {
    this.cartService.deleteByNumber(orderNumber);
  }
}
