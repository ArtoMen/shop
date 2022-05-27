import { Component } from '@angular/core';
import {CheckoutService} from "../../core/services/checkout.service";

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase-page.component.html',
  styleUrls: ['./purchase-page.component.scss']
})
export class PurchasePageComponent {
  constructor(
    public checkoutService: CheckoutService
  ) { }
}
