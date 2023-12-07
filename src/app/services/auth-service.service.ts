import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import { User } from '../entities/User';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  private apiUrl = 'http://localhost:8000/user'; 
  private tokenKey = 'auth-token';
  private redirectUrl: string | null = null;
  private token: any = '';
  private currentUser: User | null = null;

  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  constructor(private http: HttpClient) { }

  // login(credentials: { username: string, password: string }): Observable<{ token: string }> {
  //   return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials)
  //     .pipe(tap((response: { token: string; }) => this.setToken(response.token)));
  // }

  login(User :any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, User , ).pipe(
      map((response: any) => response),
      catchError((error) => {
        throw error;
      })
    );
  }


  // signup(userDetails: { username: string, email: string, password: string }): Observable<{ token: string }> {
  //   return this.http.post<{ token: string }>(`${this.apiUrl}/signUp`, userDetails)
  //     .pipe(tap(response => this.setToken(response.token)));
  // }



  // signUp2(user: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/signUp`, user);
  // }

  signUp3(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/signUp`, user, { headers: this.getHeaders() }).pipe(
      map((response: any) => {
        if (response.token) {
          this.token = response.token;
        }
      })
    );
  }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signUp`, user, {
      headers: this.getHeaders(),
   
      
    });
  }

  isLoggedIn(): boolean {
    
    return !!localStorage.getItem('auth-token');
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('auth-token', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('auth-token');
    }
    return this.token;
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('auth-token');
  }


  

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  getRedirectUrl(): string | null {
    const url = this.redirectUrl;
    this.redirectUrl = null; // Reset the redirect URL
    return url;
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': this.token,
    });
  }


}
