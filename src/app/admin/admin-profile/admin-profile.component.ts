import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtResponse } from 'src/app/auth/components/login/jwt-response';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  userInfo: any;
  jwtResponse: JwtResponse | null = null; // Utilisez JwtResponse, pas de Observable ici

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfoFromToken();
    console.log(this.userInfo);
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
