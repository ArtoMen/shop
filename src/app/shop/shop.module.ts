import { NgModule } from "@angular/core";
import { ShopComponent } from "./shop.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { AuthGuard } from "../shared/guards/auth.guard";
import { TitlePipe } from "../shared/pipes/title.pipe";
import { ProductPageComponent } from "./product-page/product-page.component";
import { CartPageComponent } from "./cart-page/cart-page.component";
import { CheckoutPageComponent } from "./checkout-page/checkout-page.component";
import { CheckoutFormPageComponent } from "./checkout-form-page/checkout-form-page.component";
import { PurchasePageComponent } from "./purchase-page/purchase-page.component";

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
      },
      {
        path: 'products',
        component: ProductsPageComponent
      },
      {
        path: 'product/:id',
        component: ProductPageComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ShopComponent,
    ProductsPageComponent,
    ProductPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    CheckoutFormPageComponent,
    PurchasePageComponent,
    TitlePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  providers: [

  ],
  exports: [RouterModule]
})
export class ShopModule {

}
