import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VendorServiceService } from 'src/app/core/services/vendor-service/vendor-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthVendorGuard implements CanActivate {
  
  constructor(
    private authService:VendorServiceService,
    private router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuthenticated = this.authService.getAuthStatus();
      if (!isAuthenticated) {
          this.router.navigate(['/vendor-login']);
      }
      return isAuthenticated;
  }
  
}
