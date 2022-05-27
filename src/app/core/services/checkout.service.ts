import {Injectable} from "@angular/core";
import {CheckoutInfo} from "../interfaces/interfaces";
import {Observable, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CheckoutService {

  private info$: ReplaySubject<CheckoutInfo> = new ReplaySubject<CheckoutInfo>(1);
  private order$: ReplaySubject<number> = new ReplaySubject<number>(1);

  constructor() {
    this.init();
  }

  setInfo(info: CheckoutInfo): void {
    this.info$.next(info);
    localStorage.setItem('checkout', JSON.stringify(info));
  }

  getInfo(): Observable<CheckoutInfo> {
    return this.info$.asObservable();
  }

  init() {
    this.info$.next(this.loadInfoWithLocalStorage())
  }

  loadInfoWithLocalStorage() {
    return JSON.parse(localStorage.getItem('checkout')!);
  }

  createOrder() {
    const number = Math.floor(Math.random() * 8000000) + 1000000;
    this.order$.next(number);
  }

  getOrder() {
    return this.order$;
  }
}
