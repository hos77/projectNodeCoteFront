import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

export class authguardGuard implements CanActivate {
  

  constructor(
    private router: Router , private authser :AuthServiceService
  ) { }

  canActivate(): boolean {
    const token = this.authser.getToken()
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  

};
