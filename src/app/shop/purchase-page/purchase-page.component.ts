import { Component, OnInit } from '@angular/core';
import {CheckoutService} from "../../core/services/checkout.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase-page.component.html',
  styleUrls: ['./purchase-page.component.scss']
})
export class PurchasePageComponent implements OnInit {

  orderNumber!: Observable<number>;

  constructor(
    private checkoutService: CheckoutService
  ) { }

  ngOnInit(): void {
    this.orderNumber = this.checkoutService.getOrder();
  }
}
