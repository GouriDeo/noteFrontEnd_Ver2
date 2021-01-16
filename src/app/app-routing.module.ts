import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './component/signup/signup.component'
import {LogInComponent} from './component/log-in/log-in.component'
import {ForgotPasswordComponent} from './component/forgot-password/forgot-password.component';
import {UpdatepasswordComponent} from './component/updatepassword/updatepassword.component'
import {UserVerificationComponent} from './component/user-verification/user-verification.component'

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LogInComponent},
  {path:'register',component:SignupComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'updatepassword/:token',component:UpdatepasswordComponent},
  {path:'verify/:token',component:UserVerificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
