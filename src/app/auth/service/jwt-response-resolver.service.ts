import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { JwtResponse } from '../components/login/jwt-response';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JwtResponseResolver implements Resolve<JwtResponse | null> {

  constructor(private apiService: ApiService) { }


  resolve(route: ActivatedRouteSnapshot): Observable<JwtResponse> {
    const formData = {  // You can create the formData object here based on your use case
      username: route.queryParams['username'], // Get the username from query params or set it to an empty string
      password: route.queryParams['password'], // Get the password from query params or set it to an empty string
    };
    console.log(formData);
    return this.apiService.getJwtResponse(formData);
  }
}
