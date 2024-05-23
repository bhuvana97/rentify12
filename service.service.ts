import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 

  private apiUrl = 'http://localhost:3000/api'; // Your Express API URL

  constructor(private http: HttpClient, private router: Router) {
    this.listenForLogout();
  }
  register(firstname: string, lastname: string, email: string, phone: string, user: string): Observable<any> {
    console.log(phone+""+user)
    return this.http.post<any>(`${this.apiUrl}/signup`, { firstname, lastname, email, phone, user });
  }
  login(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email}).pipe(
      tap((response: { token: string;usertype:string }) => {
        localStorage.setItem('token', response.token);
        alert('Successful login');
        if (response.usertype === 'seller') {
          this.router.navigate(['/seller']);
        } else if (response.usertype === 'buyer') {
          this.router.navigate(['/buyer']);
        } 
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.setItem('logout-event', 'logout' + Math.random());
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  addSellerDetails(place: string, area: number, bedrooms: number, bathrooms: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/seller`, { place, area, bedrooms, bathrooms });
  }

  updateSellerDetails(id: number, place: string, area: number, bedrooms: number, bathrooms: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/seller/${id}`, { place, area, bedrooms, bathrooms });
  }

  deleteSellerDetails(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/seller/${id}`);
  }

  getSellerDetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/seller`);
  }

  private listenForLogout(): void {
    window.addEventListener('storage', (event) => {
      if (event.key === 'logout-event') {
        this.handleLogout();
      }
    });
  }

  private handleLogout(): void {
    if (!this.isLoggedIn()) {
      alert('You have been logged out from another tab');
      this.router.navigate(['/login']);
    }
  }





}
