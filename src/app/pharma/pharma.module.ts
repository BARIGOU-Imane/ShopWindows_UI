import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmaRoutingModule } from './pharma-routing.module';
import { PharmaDashboardComponent } from './pharma-dashboard/pharma-dashboard.component';
import { PharmaProfileComponent } from './pharma-profile/pharma-profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/service/auth.service';
import { ApiService } from '../auth/service/api.service';
import { JwtResponseResolver } from '../auth/service/jwt-response-resolver.service';


@NgModule({
  declarations: [
    PharmaDashboardComponent,
    PharmaProfileComponent,
  ],
  imports: [
    CommonModule,
    PharmaRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService,ApiService,JwtResponseResolver],

})
export class PharmaModule { }
