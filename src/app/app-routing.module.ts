import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';
import { DashboardComponent } from './labo/dashboard/dashboard.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { PharmaDashboardComponent } from './pharma/pharma-dashboard/pharma-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DashcompComponent } from './labo/markcomp/dashcomp/dashcomp.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path: 'admin',loadChildren:()=> import("./admin/admin.module").then(m=>m.AdminModule)},
  {path: 'labo',loadChildren:()=> import("./labo/labo.module").then(m=>m.LaboModule)},
  {path: 'pharma',loadChildren:()=> import("./pharma/pharma.module").then(m=>m.PharmaModule)},
  {path: 'test',loadChildren:()=> import("./test/test.module").then(m=>m.TestModule)},
  {path: 'labo/dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuardGuard], // Utilisez le route guard ici
  data: {
    role: '[ROLE_LABORATOIRE]' // Spécifiez le rôle requis pour accéder à cette route
  }},

  {path: 'pharma/pharmaDashboard',
  component: PharmaDashboardComponent,
  canActivate: [AuthGuardGuard], // Utilisez le route guard ici
  data: {
    role: '[ROLE_PHARMACIE]' // Spécifiez le rôle requis pour accéder à cette route
  }},

  {path: 'admin/adminDashboard',
  component: AdminDashboardComponent,
  canActivate: [AuthGuardGuard], // Utilisez le route guard ici
  data: {
    role: '[ROLE_ADMIN]' // Spécifiez le rôle requis pour accéder à cette route
  }},
  {path:'**', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
