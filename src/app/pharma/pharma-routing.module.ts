import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmaDashboardComponent } from './pharma-dashboard/pharma-dashboard.component';
import { PharmaProfileComponent } from './pharma-profile/pharma-profile.component';
import { JwtResponseResolver } from '../auth/service/jwt-response-resolver.service';
import { AuthGuardGuard } from '../guards/auth-guard.guard';

const routes: Routes = [
  // {path: 'pharmaDashboard', component: PharmaDashboardComponent},
  {path: 'pharmaProfile',component:PharmaProfileComponent},
  // {path: 'pharmaDashboard', component: PharmaDashboardComponent , resolve: { jwtResponse: JwtResponseResolver }},
  {path: 'pharmaDashboard',
  component: PharmaDashboardComponent,
  canActivate: [AuthGuardGuard], // Utilisez le route guard ici
  data: {
    role: '[ROLE_PHARMACIE]' 
  }},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmaRoutingModule { }
