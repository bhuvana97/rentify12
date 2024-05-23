import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerdashboardComponent } from './buyerdashboard/buyerdashboard.component';
import { Component2Component } from './component2/component2.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { AuthGuard } from './auth.guard';
import { AddFormComponent } from './add-form/add-form.component';
import { ViewsellerdataComponent } from './viewsellerdata/viewsellerdata.component';


const routes: Routes = [
  
    { path: '', component: Component2Component},
    { path: 'signup', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'buyer', component: BuyerdashboardComponent ,canActivate: [AuthGuard]},
    { path: 'seller', component: SellerdashboardComponent,canActivate: [AuthGuard] },

    { path: 'viewseller', component: ViewsellerdataComponent,canActivate: [AuthGuard] }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
