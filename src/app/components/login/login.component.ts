import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

  user: any = {
    username: '',
    password: ''
  };

  
  constructor(private authentifivation_service: AuthServiceService, private router: Router){}

  ngOnInit(): void {
  }

  login() {
    this.authentifivation_service.login(this.user ).subscribe(
      (response: any) => {
        this.authentifivation_service.setCurrentUser(response.user); 
        console.log('login  successful');
        localStorage.setItem('auth-token', response.token);
        this.router.navigate(['/home']); 
      },
      error => {
        console.log(this.user);
        console.error('login  error:', error);
      }
    );
  }

}
