import { NgModule } from "@angular/core";
import { ShopComponent } from "./shop.component";
import { RouterModule, Routes } from "@angular/router";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { AuthGuard } from "../core/guards/auth.guard";
import { ProductPageComponent } from "./product-page/product-page.component";
import { CartPageComponent } from "./cart-page/cart-page.component";
import { CheckoutPageComponent } from "./checkout-page/checkout-page.component";
import { CheckoutFormPageComponent } from "./checkout-form-page/checkout-form-page.component";
import { PurchasePageComponent } from "./purchase-page/purchase-page.component";
import {CoreModule} from "../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";

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
      },
      {
        path: 'cart',
        component: CartPageComponent
      },
      {
        path: 'checkout-form',
        component: CheckoutFormPageComponent
      },
      {
        path: 'checkout',
        component: CheckoutPageComponent
      },
      {
        path: 'purchase',
        component: PurchasePageComponent
      },
      {
        path: '**',
        redirectTo: '/shop/products'
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
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  providers: [

  ],
  exports: [RouterModule]
})
export class ShopModule {

}
