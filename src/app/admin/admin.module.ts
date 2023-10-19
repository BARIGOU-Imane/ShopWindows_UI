import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/service/auth.service';
import { ApiService } from '../auth/service/api.service';
import { JwtResponseResolver } from '../auth/service/jwt-response-resolver.service';
import { AuthorizeUsersComponent } from './authorize-users/authorize-users.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminProfileComponent,
    AuthorizeUsersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService,ApiService,JwtResponseResolver],

})
export class AdminModule { }
