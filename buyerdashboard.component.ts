import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-buyerdashboard',
  templateUrl: './buyerdashboard.component.html',
  styleUrls: ['./buyerdashboard.component.css']
})
export class BuyerdashboardComponent implements OnInit {

  constructor(private authService:ServiceService,private router:Router) { }

  ngOnInit() {
  }
  logout(): void {
    this.authService.logout();
    // Redirect to login page upon logout
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
