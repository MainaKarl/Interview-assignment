import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { LoginscreenComponent } from '../../LogIn/loginscreen/loginscreen.component';



const routes: Routes = [
  // {path: 'home', component: HomescreenComponent},
  {path: 'login', component: LoginscreenComponent}  
];
@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrl: './home-navbar.component.css'
})
export class HomeNavbarComponent {

  constructor(private router:Router){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
