import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboRoutingModule } from './labo-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaboProfileComponent } from './profile/labo-profile/labo-profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/service/auth.service';
import { ApiService } from '../auth/service/api.service';
import { JwtResponseResolver } from '../auth/service/jwt-response-resolver.service';
import { DashcompComponent } from './markcomp/dashcomp/dashcomp.component';
import { AddcompComponent } from './markcomp/addcomp/addcomp.component';
import { CompService } from './services/comp.service';
import { UpdatecompComponent } from './markcomp/updatecomp/updatecomp.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LaboProfileComponent,
    DashcompComponent,
    AddcompComponent,
    UpdatecompComponent,
  ],
  imports: [
    CommonModule,
    LaboRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService,ApiService,JwtResponseResolver,CompService],

})
export class LaboModule { }
