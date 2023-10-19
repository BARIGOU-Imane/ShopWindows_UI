import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtResponse } from './jwt-response'; // Import the JwtResponse interface from the new file
import { ApiService } from '../../service/api.service';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form={
    username: "",
    password: ""
  }
  errorMessage: string = '';
  successMessage:string='';
  jwtResponse: JwtResponse | null = null; // Propriété pour stocker la réponse du serveur

  constructor(private apiService: ApiService,private http: HttpClient,private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSignIn(): void {
    this.authService.signIn(this.form.username, this.form.password)
      .subscribe({
        next: (response) => {
          console.log(this.authService.getAuthToken());
          console.log(this.authService.getUserInfoFromToken());
          this.authService.saveAuthToken(response.token);
          this.successMessage = 'Login successful!';
          const userRole = this.authService.getUserRoleFromToken() as string;
          console.log(userRole);
          if (userRole === '[ROLE_LABORATOIRE]') {
            this.router.navigate(['labo/dashboard']);
          } else if (userRole === '[ROLE_PHARMACIE]') {
            this.router.navigate(['pharma/pharmaDashboard']);
          } else if (userRole === '[ROLE_ADMIN]') {
            this.router.navigate(['admin/adminDashboard']);
          } else {
            console.log('Routing impossible!')
          }
        },
        error: (error) => {
          console.log('Error during login:', error);
          this.successMessage = 'Login failed, please try again';
        }
      });
  }
  
}
