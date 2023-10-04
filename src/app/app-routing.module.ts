import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthVendorGuard } from './auth-guard/services/auth-vendor.guard';
import { AuthGuard } from './auth-guard/services/auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { EnterProductsComponent } from './components/enter-products/enter-products.component';
import { OrderConfirmedComponent } from './components/order-confirmed/order-confirmed.component';
import { OrderFailedComponent } from './components/order-failed/order-failed.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { UpdateProductsComponent } from './components/update-products/update-products.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { VendorLoginComponent } from './components/vendor-login/vendor-login.component';
import { VendorProductsComponent } from './components/vendor-products/vendor-products.component';
import { VendorRegistrationComponent } from './components/vendor-registration/vendor-registration.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [{path:"",redirectTo:"welcome-page",pathMatch:'full'},
{path:"welcome-page",component:WelcomePageComponent,canActivate:[AuthGuard]},
{path:"user-register",component:UserRegisterComponent},
{path:'products/:id',component:ProductsComponent,canActivate:[AuthGuard]},
{path:'vendor-login',component:VendorLoginComponent,canActivate:[AuthVendorGuard]},
{path:'vendor-register',component:VendorRegistrationComponent},
{path:'enter-products/:id',component:EnterProductsComponent,canActivate:[AuthVendorGuard]},
{path:'vendor-products/:id',component:VendorProductsComponent,canActivate:[AuthVendorGuard]},
{path:'cart/:id',component:CartComponent,canActivate:[AuthGuard]},
{path:'update-product/:id1/:id2',component:UpdateProductsComponent,canActivate:[AuthVendorGuard]},{
  path:'order-confirmed/:id1/:id2',component:OrderConfirmedComponent,canActivate:[AuthGuard]},
{path:'sales-report/:id',component:SalesReportComponent},{
  path:'demo',component:DemoComponent},
  {path:'your-orders/:id',component:OrdersComponent},
{path:'order-failed/:id',component:OrderFailedComponent}];

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
