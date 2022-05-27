import { Injectable } from '@angular/core';
import {CartItem} from "../interfaces/interfaces";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private source$: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    this.init();
  }

  addToCart(item: CartItem): void {
    const cart = [item, ...this.source$.getValue()];
    this.source$.next(cart);
    this.saveCartToLocalStorage();
  }

  getCart(): Observable<CartItem[]> {
    return this.source$.asObservable();
  }

  deleteByNumber(orderNumber: number): void {
    const arr = this.source$.getValue().filter(el => el.orderNumber !== orderNumber);
    this.source$.next(arr);
    this.saveCartToLocalStorage();
  }

  deleteAll(): void {
    this.source$.next([]);
    this.saveCartToLocalStorage();
  }

  private saveCartToLocalStorage(): void {
    const cart = this.source$.getValue();
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  private init(): void {
    this.source$.next(this.getCartFromLocalStorage());
  }

  private getCartFromLocalStorage(): CartItem[] {
    return JSON.parse(localStorage.getItem('cart')!) ?? [];
  }



}
