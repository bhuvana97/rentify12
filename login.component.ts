import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;

  constructor(private authService:ServiceService,private router:Router) { }

  ngOnInit(): void {
    // Initialize any properties or perform setup logic here if needed
  }

  onSubmit() {
    if (this.isValid()) {
      // Form is valid, perform submission logic here
      console.log('Form submitted:', { email: this.email });

      this.authService.login(this.email).subscribe(
        (response) => {
          // Navigate based on user type
          console.log(response);
          const userType = response.userType; // Assuming userType is returned from the backend
          console.log(userType)
          if (userType === 'buyer') {
            this.router.navigate(['/buyer']);
          } else if (userType === 'seller') {
            this.router.navigate(['/seller']);
          } else {
            // Handle unknown user type
            console.error('Unknown user type:', userType);
          }
        },
        (error) => {
          console.error('Login error:', error);
          alert('Login error: ' + error.message);
        }
      );
    }
  }


  isValid(): boolean {
    // Check if the email is not empty and matches a basic email pattern
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailPattern.test(this.email);
  }


  // determineTargetRoute(userData: any): string {

  //   if (userData.isAdmin) {
  //     return '/admin';
  //   } else {
  //     return '/user';
  //   }
  // }
}
