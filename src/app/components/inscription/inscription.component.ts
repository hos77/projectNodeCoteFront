import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/User';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

   user: User = {
     _id: '',
     cin: '',
     nom: '',
     prenom: '',
     adresse: '',
     phone: 0,
     username: '',
     email: '',
     password: ''
   };
    constructor(private authentifivation_service: AuthServiceService, private router: Router){}

  ngOnInit(): void {

  }

  signup() {
    this.authentifivation_service.signup(this.user).subscribe(
      (response: any) => {
        this.authentifivation_service.setCurrentUser(response.user); 
        console.log('Signup successful');
        localStorage.setItem('auth-token', response.token);
        this.router.navigate(['/home']); 
      },
      error => {
        console.log(this.user);
        console.error('Signup error:', error);
      }
    );
  }
}







