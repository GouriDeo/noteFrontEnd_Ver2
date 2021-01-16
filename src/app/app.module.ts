import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { LogInComponent } from './component/log-in/log-in.component';
import { UserVerificationComponent } from './component/user-verification/user-verification.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { UpdatepasswordComponent } from './component/updatepassword/updatepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LogInComponent,
    UserVerificationComponent,
    ForgotPasswordComponent,
    UpdatepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule, 
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
