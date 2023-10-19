import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtResponse } from 'src/app/auth/components/login/jwt-response';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  jwtResponse: JwtResponse | null = null; // Utilisez JwtResponse, pas de Observable ici
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    console.log('DashboardComponent initialized.');
    console.log('ResponseEntity:', this.route.snapshot.data['JwtResponse']); // Vérifiez la valeur de ResponseEntity ici
    this.jwtResponse = this.route.snapshot.data['jwtResponse'];
    console.log('jwtResponse:', this.jwtResponse); // Vérifiez la valeur de jwtResponse ici
  }
  hasRole(role: string): boolean {
    return !!this.jwtResponse && this.jwtResponse.roles.includes(role);
  }

  goToProfile() {
    localStorage.setItem('jwtResponse', JSON.stringify(this.jwtResponse)); // Stocker jwtResponse dans le local storage
    this.router.navigate(['admin/adminProfile']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}