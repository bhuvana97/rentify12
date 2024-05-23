import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sellerdashboard',
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent implements OnInit {

  constructor (private authService:ServiceService,private router:Router){ }

  ngOnInit() {
  }
  place!: string;
  area!: number;
  bedrooms!: number;
  bathrooms!: number;

logout(): void {
    this.authService.logout();
    // Redirect to login page upon logout
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  onSubmit() {
    if (this.isValid()) {
      // Form is valid, perform submission logic here
      console.log('Form submitted:', { 
        place: this.place,
        area: this.area,
        bedrooms: this.bedrooms,
        bathrooms: this.bathrooms 
      });
      this.clearForm();

      // You can add logic to save the data here
    }
  
  }

  isValid(): boolean {
    return this.place !== '' && this.area > 0 && this.bedrooms > 0 && this.bathrooms > 0;
  }

  viewDetails() {
    console.log('Viewing details:', { 
      place: this.place,
      area: this.area,
      bedrooms: this.bedrooms,
      bathrooms: this.bathrooms 
    });
    // Add logic to display property details here
  }

  updateProperty() {
    console.log('Updating property:', { 
      place: this.place,
      area: this.area,
      bedrooms: this.bedrooms,
      bathrooms: this.bathrooms 
    });
    // Add logic to update the property details here
  }

  deleteProperty() {
    console.log('Deleting property:', { 
      place: this.place,
      area: this.area,
      bedrooms: this.bedrooms,
      bathrooms: this.bathrooms 
    });
    // Add logic to delete the property here
    this.clearForm();
  }

  clearForm() {
    this.place = '';
    this.area = 0;
    this.bedrooms = 0;
    this.bathrooms = 0;
  }
}
