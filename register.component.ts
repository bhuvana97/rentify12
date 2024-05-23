import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService:ServiceService,private router: Router) { }

  ngOnInit() {
  }
  firstname!: string;
  lastname!:string;
  email!: string;
  phone!: string;
  selectedUser: string;
onUserChange(event: Event): void {
  this.selectedUser = (event.target as HTMLSelectElement).value;
  console.log('Selected user type:', this.selectedUser);
}
  onSubmit() {
    if (this.isValid()) {
      // Form is valid, perform submission logic here
      console.log('Form submitted:', { firstname: this.firstname,lastname:this.lastname, email: this.email, phone: this.phone,user:this.selectedUser});
   
     
          this.apiService.register(this.firstname, this.lastname, this.email, this.phone, this.selectedUser).subscribe(
            response => {
              console.log('User registered successfully');
              this.router.navigate(['/login']);
            },
            error => {
              console.error('Error registering user', error);
            }
          );
   
   
      // window.location.reload()




    }
  }

  isValid(): boolean {
    return !!this.firstname && !!this.lastname && !!this.email && !!this.phone && !!this.selectedUser;
  }
  
}
