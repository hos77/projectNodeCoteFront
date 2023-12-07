import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { Voiture } from '../entities/Voiture';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  private apiUrl = 'http://localhost:8000/productCateg';

  constructor(private http: HttpClient , private authService :AuthServiceService) { }

  getCategories(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': this.authService.getToken() || '', // Include the token
    });

    return this.http.get(`${this.apiUrl}/categories`, { headers });
  }

  getVoituresByCategory(categorieId: string): Observable<Voiture[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': this.authService.getToken() || '',
    });
    return this.http.get<Voiture[]>(`${this.apiUrl}/getallcarbycategory/${categorieId}`, { headers });
  }

  
}




