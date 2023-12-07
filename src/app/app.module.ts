import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { DetailsCarComponent } from './components/details-car/details-car.component';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { authguardGuard } from './guards/authguard.guard';
import { ListeVoitureComponent } from './components/liste-voiture/liste-voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FooterComponent,
    ListCarComponent,
    DetailsCarComponent,
    LoginComponent,
    InscriptionComponent,
    ContactComponent,
    HomeComponent,
    ListeVoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent , authguardGuard]
})
export class AppModule { }
