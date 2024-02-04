import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './Home/homescreen/homescreen.component';
import { LoginscreenComponent } from './LogIn/loginscreen/loginscreen.component';
import { RegistrationscreenComponent } from './Registration/registrationscreen/registrationscreen.component';
import { LandingScreenComponent } from './Landingpage/landing-screen/landing-screen.component';


const routes: Routes = [
  {path: 'home', component: HomescreenComponent},
  {path: 'login', component: LoginscreenComponent},
  {path: 'register', component: RegistrationscreenComponent},
  {path: 'landingpage', component: LandingScreenComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
