import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuardGuard implements CanActivate {

  constructor(private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const requiredRole = route.data['role']; // Obtenez le rôle requis depuis les données de la route
      let userRoles = this.authService.getUserRoleFromToken() as string; // Obtenez les rôles de l'utilisateur depuis le service AuthService
      if (userRoles===requiredRole) {
        return true; 
      } else {
        return false;
      }
  }
  
}
