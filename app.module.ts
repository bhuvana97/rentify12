import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { BuyerdashboardComponent } from './buyerdashboard/buyerdashboard.component';
import { FormsModule } from '@angular/forms';

import { Component1Component } from './component1/component1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Component2Component } from './component2/component2.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinterceptorService } from './authinterceptor.service';
import { AuthGuard } from './auth.guard';
import { AddFormComponent } from './add-form/add-form.component';
import { ViewsellerdataComponent } from './viewsellerdata/viewsellerdata.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SellerdashboardComponent,
    BuyerdashboardComponent,
    
    Component1Component,
    NavbarComponent,
    Component2Component,
    AddFormComponent,
    ViewsellerdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthinterceptorService,
    multi: true
  },
AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
