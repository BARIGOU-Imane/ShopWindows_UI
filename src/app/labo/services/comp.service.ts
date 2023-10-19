import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Markcomp } from '../markcomp';

@Injectable({
  providedIn: 'root'
})
export class CompService {
  private urlLabo = 'http://localhost:8080/labo';
  constructor(private http: HttpClient, private authService: AuthService) { 
  }

  createCompagnes(markcomp:any): Observable<any> {
    const token = this.authService.getAuthToken();
    console.log(token);
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.post(`${this.urlLabo}/addComp`,markcomp ,{ headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  } 

  updateComp(id: number , markcomp:any): Observable<any> {
    const token = this.authService.getAuthToken();
    console.log(token);
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.put(`${this.urlLabo}/updateComp/${id}`,markcomp ,{ headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }

  getCompagneById(id : number): Observable<any> {
    const token = this.authService.getAuthToken();
    console.log(token);
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.get<Markcomp[]>(`${this.urlLabo}/compagne/${id}`, { headers})
        .pipe(
          catchError((error) => {
            console.error(error);
            return throwError('Failed to find campaign.');
          })
        );
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }
  
  getAllCompUser(): Observable<Markcomp[]> {
    const token = this.authService.getAuthToken();
    console.log(token);
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.get<Markcomp[]>(`${this.urlLabo}/getAllCompUser`, { headers})
        .pipe(
          catchError((error) => {
            console.error(error);
            return throwError('Failed to fetch campaigns user.');
          })
        );
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }

  getAllComps(): Observable<Markcomp[]> {
    const token = this.authService.getAuthToken();
    console.log(token);
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.get<Markcomp[]>(`${this.urlLabo}/compagnes`, { headers})
        .pipe(
          catchError((error) => {
            console.error(error);
            return throwError('Failed to fetch campaigns.');
          })
        );
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }

  findByNameComp(nameComp:string): Observable<any> {
    const token = this.authService.getAuthToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.get<any>(`${this.urlLabo}/comps/name?nameComp=${nameComp}`, { headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }

  findByBrand(brand:string): Observable<any> {
    const token = this.authService.getAuthToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.get<any>(`${this.urlLabo}/comps/brand?brand=${brand}`, { headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }

  findByTypeComp(typeComp:string): Observable<any> {
    const token = this.authService.getAuthToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.get<any>(`${this.urlLabo}/comps/type?typeComp=${typeComp}`, { headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }

  findBySeason(season:string): Observable<any> {
    const token = this.authService.getAuthToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.get<any>(`${this.urlLabo}/comps/season?season=${season}`, { headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }
  findByPeriod(period:string): Observable<any> {
    const token = this.authService.getAuthToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.get<any>(`${this.urlLabo}/comps/period?period=${period}`, { headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }

  findByDate(startDate:string,endDate:string): Observable<any> {
    const token = this.authService.getAuthToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.get<any>(`${this.urlLabo}/comps/date?startDate=${startDate}&endDate=${endDate}`, { headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }

  deleteComp(id : number):Observable<any>{
    const token = this.authService.getAuthToken();
    console.log(token);
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `${token}`);
      return this.http.delete(`${this.urlLabo}/deleteComp/${id}`,{ headers });
    } else {
      return throwError('Jetons JWT non disponible');
    }
  }

}
