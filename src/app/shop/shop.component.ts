import { Component } from "@angular/core";
import { CartService } from "../core/services/cart.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  constructor(
    public cart: CartService
  ) {
  }

}

