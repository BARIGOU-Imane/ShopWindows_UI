
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { JwtResponse } from '../components/login/jwt-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    private apiUrl = 'http://localhost:8080/api/auth';
    private authTokenKey = 'Authorization'; 
    

    constructor(private http: HttpClient, private router: Router) {}

    //retourner les infos liées à labo/pharma
    showSecondPart(pharmaLaboGln: string): Observable<any> {
      const params = new HttpParams().set('pharmaLaboGln', pharmaLaboGln);
      return this.http.get<any>(`${this.apiUrl}/checkGln`, { params });
    }

    signUp(formData: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/signup`, formData);
    } 
    
    signIn(username: string, password: string): Observable<any> {
      const loginRequest = { username: username, password: password };
      return this.http.post<any>(`${this.apiUrl}/signin`, loginRequest).pipe(
        catchError((error) => {
          // Gérer l'erreur ici
          console.log('Error:', error);
          throw error;
        })
      );
    }

    // Enregistre le jeton JWT dans le local storage
    saveAuthToken(token: string): void {
      localStorage.setItem(this.authTokenKey, `Bearer ${token}`);
    }
  
    // Récupère le jeton JWT depuis le local storage
    getAuthToken(): string | null {
      return localStorage.getItem(this.authTokenKey);
    }
  
    // Vérifie si l'utilisateur est connecté en vérifiant l'existence du jeton JWT
    isUserLoggedIn(): boolean {
      return !!this.getAuthToken();
    }
  
    logout(): void {
      localStorage.removeItem(this.authTokenKey);
    }
  
    // Récupère les informations de l'utilisateur à partir du jeton JWT décodé
    getUserRoleFromToken(): any {
      const token = this.getAuthToken();
      if (token) {
        try {
          const userInfo = jwt_decode(token.split(' ')[1]);
          const expirationDate = new Date(userInfo.exp * 1000); // Convertir la date d'expiration du token en millisecondes
          const currentDate = new Date();
          if (expirationDate <= currentDate) {
            this.logout();
            this.router.navigate(['/login']); 
          }
          const role = userInfo.role;
          return role;
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
      return null;
    }

  getUserInfoFromToken(): any {
    const token = this.getAuthToken();
    if (token) {
      try {
        const userInfo = jwt_decode(token.split(' ')[1]);
        const expirationDate = new Date(userInfo.exp * 1000); // Convertir la date d'expiration du token en millisecondes
        const currentDate = new Date();
        if (expirationDate <= currentDate) {
          this.logout();
          this.router.navigate(['/login']); 
        }
        return userInfo;
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
    return null;
}
  getNoneApprovedUsers(): Observable<JwtResponse[]> {
    const token = this.getAuthToken();
    console.log(token);
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.get<JwtResponse[]>(`${this.apiUrl}/getNoneapprovedUsers`, { headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  } 
  // authService.ts
  getUserDetails(userId: number): Observable<JwtResponse> {
    const token = this.getAuthToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.get<JwtResponse>(`${this.apiUrl}/getUser/?id=${userId}`, { headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }

  validerUser(userId: number,validerUser:any): any {
    const token = this.getAuthToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.put<JwtResponse>(`${this.apiUrl}/${userId}`,validerUser, { headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }

}




