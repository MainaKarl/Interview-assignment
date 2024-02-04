import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './Home/home-navbar/home-navbar.component';
import { ServiceListComponent } from './Home/service-list/service-list.component';
import { HomeMiddlescreenComponent } from './Home/home-middlescreen/home-middlescreen.component';
import { HomeFooterComponent } from './Home/home-footer/home-footer.component';
import { LoginFooterComponent } from './LogIn/login-footer/login-footer.component';
import { LoginNavbarComponent } from './LogIn/login-navbar/login-navbar.component';
import { LoginMiddlescreenComponent } from './LogIn/login-middlescreen/login-middlescreen.component';
import { HomescreenComponent } from './Home/homescreen/homescreen.component';
import { LoginscreenComponent } from './LogIn/loginscreen/loginscreen.component';
import { RegistrationpageComponent } from './Registration/registrationpage/registrationpage.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationscreenComponent } from './Registration/registrationscreen/registrationscreen.component';
import { RegistrationNavbarComponent } from './Registration/registration-navbar/registration-navbar.component';
import { RegistrationFooterComponent } from './Registration/registration-footer/registration-footer.component';
import { LandingNavbarComponent } from './Landingpage/landing-navbar/landing-navbar.component';
import { LandingScreenComponent } from './Landingpage/landing-screen/landing-screen.component';
import { LandingFooterComponent } from './Landingpage/landing-footer/landing-footer.component';
import { LandingMiddlescreenComponent } from './Landingpage/landing-middlescreen/landing-middlescreen.component';
import { LandingServicesComponent } from './Landingpage/landing-services/landing-services.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    ServiceListComponent,
    HomeMiddlescreenComponent,
    HomeFooterComponent,
    LoginFooterComponent,
    LoginNavbarComponent,
    LoginMiddlescreenComponent,
    HomescreenComponent,
    LoginscreenComponent,
    RegistrationpageComponent,
    RegistrationscreenComponent,
    RegistrationNavbarComponent,
    RegistrationFooterComponent,
    LandingNavbarComponent,
    LandingScreenComponent,
    LandingFooterComponent,
    LandingMiddlescreenComponent,
    LandingServicesComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
