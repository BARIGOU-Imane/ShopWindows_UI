import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JwtResponseResolver } from '../auth/service/jwt-response-resolver.service';
import { LaboProfileComponent } from './profile/labo-profile/labo-profile.component';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { DashcompComponent } from './markcomp/dashcomp/dashcomp.component';
import { AddcompComponent } from './markcomp/addcomp/addcomp.component';
import { UpdatecompComponent } from './markcomp/updatecomp/updatecomp.component';

const routes: Routes = [
  {path: 'markcomp/dashcomp',
  component: DashcompComponent,
  canActivate: [AuthGuardGuard], 
  data: {
    role: '[ROLE_LABORATOIRE]' 
  }},
  {path: 'markcomp/addcomp',
  component: AddcompComponent,
  canActivate: [AuthGuardGuard], 
  data: {
    role: '[ROLE_LABORATOIRE]' 
  }},
  {path: 'markcomp/updatecomp',
  component: UpdatecompComponent,
  canActivate: [AuthGuardGuard], 
  data: {
    role: '[ROLE_LABORATOIRE]' 
  }},
  {path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuardGuard], 
  data: {
    role: '[ROLE_LABORATOIRE]' 
  }},
 
  {path: 'laboProfile',component:LaboProfileComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboRoutingModule { }
