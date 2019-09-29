import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Uploadfile } from '../services/upload.service';

@Injectable({
	providedIn: 'root'
})
export class LogedInGuard implements CanActivate {

  constructor(private authService: AuthService, private Uploadfile: Uploadfile, private router: Router) {}


 canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.authService.user.getValue() != null ? true : this.router.parseUrl('/login');
    return this.Uploadfile.Upload.getValue() != null ? true :  this.router.parseUrl('/Uploadfile');
	}
}





