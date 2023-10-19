import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtResponse } from 'src/app/auth/components/login/jwt-response';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-pharma-profile',
  templateUrl: './pharma-profile.component.html',
  styleUrls: ['./pharma-profile.component.css']
})
export class PharmaProfileComponent implements OnInit {

  jwtResponse: JwtResponse | null = null; // Utilisez JwtResponse, pas de Observable ici

  constructor(private route: ActivatedRoute,private router: Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    const jwtResponseStr = localStorage.getItem('jwtResponse');
    if (jwtResponseStr) {
      this.jwtResponse = JSON.parse(jwtResponseStr);
      console.log('jwtResponse:', this.jwtResponse);
    }
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
