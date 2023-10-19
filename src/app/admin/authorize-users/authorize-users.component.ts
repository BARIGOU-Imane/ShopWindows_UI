import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtResponse } from 'src/app/auth/components/login/jwt-response';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-authorize-users',
  templateUrl: './authorize-users.component.html',
  styleUrls: ['./authorize-users.component.css']
})
export class AuthorizeUsersComponent implements OnInit {

  noneApprovedUsers: JwtResponse[] = [];
  userDetails: JwtResponse | null = null;
  showConfirmation: any = null;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.authService.getNoneApprovedUsers().subscribe(
      (users: JwtResponse[]) => {
        this.noneApprovedUsers = users;
      },
      (error) => {
        console.error('Error fetching none approved users:', error);
      }
    );
  }

    // Fonction pour récupérer les détails de l'utilisateur lors du clic sur le bouton "CHECK"
    showUserDetails(userId: number): void {
      this.authService.getUserDetails(userId).subscribe(
        (userDetails: JwtResponse) => {
          this.userDetails = userDetails;
          const modal = document.getElementById('userModal');
        if (modal) {
          modal.style.display = 'block'; // Afficher la boîte modale
        }
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    }
        closeUserModal(): void {
          const modal = document.getElementById('userModal');
          if (modal) {
            modal.style.display = 'none'; // Cacher la boîte modale
          }
          this.userDetails = null; // Réinitialiser les détails de l'utilisateur
        }
        
        validerUser(userId: number): void {
          this.showConfirmation = { action: 'accept', userId };
        }
      
        refuserUser(userId: number): void {
          this.showConfirmation = { action: 'deny', userId };
        }
      
        onConfirm(): void {
          if (this.showConfirmation.action === 'accept') {
            const validerUser = { "isvalid": true };
            this.authService.validerUser(this.showConfirmation.userId, validerUser).subscribe(
              (response: any) => {
                console.log('user is valid: ', response);
                this.showConfirmation = null; // Fermer la boîte de dialogue après la confirmation
              },
              (error: any) => {
                console.error('Error: ', error);
                this.showConfirmation = null; // Fermer la boîte de dialogue après la confirmation
              }
            );
          } else if (this.showConfirmation.action === 'deny') {
            const validerUser = { "isvalid": false };
            this.authService.validerUser(this.showConfirmation.userId, validerUser).subscribe(
              (response: any) => {
                console.log('user is valid: ', response);
                this.showConfirmation = null; // Fermer la boîte de dialogue après la confirmation
              },
              (error: any) => {
                console.error('Error: ', error);
                this.showConfirmation = null; // Fermer la boîte de dialogue après la confirmation
              }
            );
          }
        }
      
        onCancel(): void {
          // Logique à exécuter si l'utilisateur annule l'action
          this.showConfirmation = null; // Fermer la boîte de dialogue si l'utilisateur annule
        }

        logout(){
          this.authService.logout();
          this.router.navigate(['/login']);
        }
  }

