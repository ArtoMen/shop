import {Component, OnInit} from '@angular/core';
import { CartService } from "../../core/services/cart.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(
    public cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  deleteItem(orderNumber: number) {
    this.cartService.deleteByNumber(orderNumber);
  }
}
