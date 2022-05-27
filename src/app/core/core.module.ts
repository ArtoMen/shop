import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TitlePipe} from "./pipes/title.pipe";
import {DetailPipe} from "./pipes/detail.pipe";
import {SumPipe} from "./pipes/sum.pipe";
import {LengthPipe} from "./pipes/length.pipe";
import {NzIconModule} from "ng-zorro-antd/icon";
import {GetFieldPipe} from "./pipes/getField.pipe";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {CreditCartPipe} from "./pipes/credit-cart.pipe";

@NgModule({
  declarations: [
    TitlePipe,
    DetailPipe,
    SumPipe,
    LengthPipe,
    GetFieldPipe,
    CreditCartPipe
  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzSpinModule
  ],
  exports: [
    CommonModule,
    TitlePipe,
    DetailPipe,
    SumPipe,
    LengthPipe,
    GetFieldPipe,
    NzIconModule,
    NzSpinModule,
    CreditCartPipe
  ]
})
export class CoreModule {
  constructor() {
  }
}
