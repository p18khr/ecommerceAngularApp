import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './core/services/user-service/user-service.service';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VendorLoginComponent } from './components/vendor-login/vendor-login.component';
import { VendorRegistrationComponent } from './components/vendor-registration/vendor-registration.component';
import { EnterProductsComponent } from './components/enter-products/enter-products.component';
import { VendorProductsComponent } from './components/vendor-products/vendor-products.component';
import { ProductService } from './core/services/product-service/product.service';
import { UpdateProductsComponent } from './components/update-products/update-products.component';
import { CartComponent } from './components/cart/cart.component';
import { VendorServiceService } from './core/services/vendor-service/vendor-service.service';
import { OrderConfirmedComponent } from './components/order-confirmed/order-confirmed.component';
import { FooterLgComponent } from './shared/footer-lg/footer-lg.component';
import { CartService } from './core/services/cart-service/cart.service';
import { SalesService } from './core/services/sales-service/sales.service';
import { AuthGuard } from './auth-guard/services/auth.guard';
import { AuthVendorGuard } from './auth-guard/services/auth-vendor.guard';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterProductsComponent } from './shared/footer-products/footer-products.component';
import { DemoComponent } from './demo/demo.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderFailedComponent } from './components/order-failed/order-failed.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    UserRegisterComponent,
    ProductsComponent,
    FooterComponent,
    VendorLoginComponent,
    VendorRegistrationComponent,
    EnterProductsComponent,
    VendorProductsComponent,
    UpdateProductsComponent,
    CartComponent,
    OrderConfirmedComponent,
    FooterLgComponent,
    SalesReportComponent,
    FooterProductsComponent,
    DemoComponent,
    OrdersComponent,
    OrderFailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [HttpClient,UserServiceService,VendorServiceService,ProductService,CartService,SalesService,AuthGuard,AuthVendorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
