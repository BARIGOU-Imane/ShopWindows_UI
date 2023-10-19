import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtResponse } from '../components/login/jwt-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

  getJwtResponse(formData: any): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.apiUrl}/api/auth/signin`, formData);
  }
}