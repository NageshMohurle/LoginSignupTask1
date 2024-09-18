import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/singup/singup.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignupComponent },
  { path: "", component: RouterOutlet },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
