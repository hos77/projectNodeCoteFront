import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { DetailsCarComponent } from './components/details-car/details-car.component';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HomeComponent } from './components/home/home.component';
import { authguardGuard } from './guards/authguard.guard';
import { ListeVoitureComponent } from './components/liste-voiture/liste-voiture.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent   },
  { path: 'contact', component: ContactComponent  },
  { path: 'categorie', component: ListCarComponent  },
  { path: 'car-details/:id', component: DetailsCarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: InscriptionComponent },
  {path :'listeVoiture/:categoryId' , component:ListeVoitureComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
