import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(public auth :AuthServiceService , private router :Router){}


  logout(): void {
    this.auth.logout();
    localStorage.removeItem('auth-token');
    
  }

  login(): void {
    this.router.navigate(['/login']);
  }

}
