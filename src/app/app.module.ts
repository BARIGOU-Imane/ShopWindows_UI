import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/service/auth.service';
import { ApiService } from './auth/service/api.service';
import { JwtResponseResolver } from './auth/service/jwt-response-resolver.service';
import { TestComponent } from './test/test.component';
import { AdminModule } from './admin/admin.module';
import { LaboModule } from './labo/labo.module';
import { PharmaModule } from './pharma/pharma.module';
import { TestModule } from './test/test.module';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TestComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    LaboModule,
    PharmaModule,
    TestModule
  ],
  providers: [AuthService,ApiService,JwtResponseResolver,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
