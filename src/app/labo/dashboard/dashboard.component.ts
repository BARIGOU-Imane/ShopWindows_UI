import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtResponse } from 'src/app/auth/components/login/jwt-response';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  jwtResponse: JwtResponse | null = null; // Utilisez JwtResponse, pas de Observable ici
  constructor(private route: ActivatedRoute, private router: Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    console.log('DashboardComponent initialized.');
    console.log('ResponseEntity:', this.route.snapshot.data['JwtResponse']); // Vérifiez la valeur de ResponseEntity ici
    this.jwtResponse = this.route.snapshot.data['jwtResponse'];
    console.log('jwtResponse:', this.jwtResponse); // Vérifiez la valeur de jwtResponse ici
  // Vérifier si jwtResponse est défini avant d'accéder à ses propriétés
  const currentNavigation = this.router.getCurrentNavigation();
  if (currentNavigation && currentNavigation.extras.state) {
    this.jwtResponse = currentNavigation.extras.state['jwtResponse'];
  }
 }
  hasRole(role: string): boolean {
    return !!this.jwtResponse && this.jwtResponse.roles.includes(role);
  }
  
  goToProfile() {
    localStorage.setItem('jwtResponse', JSON.stringify(this.jwtResponse)); // Stocker jwtResponse dans le local storage
    this.router.navigate(['labo/laboProfile']);
  }
  
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  goToDashcomp(){
    this.router.navigate(['/labo/markcomp/dashcomp']);
  }
  }

