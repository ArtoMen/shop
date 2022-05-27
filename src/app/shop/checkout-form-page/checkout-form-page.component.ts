import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CartItem, CheckoutInfo} from "../../core/interfaces/interfaces";
import {CartService} from "../../core/services/cart.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {CheckoutService} from "../../core/services/checkout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout-form-page',
  templateUrl: './checkout-form-page.component.html',
  styleUrls: ['./checkout-form-page.component.scss']
})
export class CheckoutFormPageComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(
      JSON.parse(localStorage.getItem('user')!).email,
      [Validators.required, Validators.email]
    ),
    fullName: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ),
    address: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ),
    phone: new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern(/\+38(\d{3})\d{7}/g)
      ]
    ),
    credit: new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern(/\d{16}/)
      ]
    ),
    cvv: new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern(/\d{3}/)
      ]
    )
  })

  public cart!: Observable<CartItem[]>

  constructor(
    private cartService: CartService,
    private message: NzMessageService,
    private checkoutService: CheckoutService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  onSubmit(): void {
    if(!this.form.valid) {
      this.message.error('Enter valid info');
    } else {
      this.checkoutService.setInfo(this.form.value as CheckoutInfo);
      this.router.navigate(['shop/checkout']).catch(err => console.log(err));
    }
  }
}
