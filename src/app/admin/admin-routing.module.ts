import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { JwtResponseResolver } from '../auth/service/jwt-response-resolver.service';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { AuthorizeUsersComponent } from './authorize-users/authorize-users.component';

const routes: Routes = [
  {path: 'adminDashboard',
  component: AdminDashboardComponent,
  canActivate: [AuthGuardGuard], 
  data: {
    role: '[ROLE_ADMIN]' 
  }},

  {path: 'adminProfile',
  component:AdminProfileComponent,
  canActivate: [AuthGuardGuard], 
  data: {
    role: '[ROLE_ADMIN]' 
  }},
  {path: 'authorizeUsers',
  component:AuthorizeUsersComponent,
  canActivate: [AuthGuardGuard], 
  data: {
    role: '[ROLE_ADMIN]' 
  }},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
