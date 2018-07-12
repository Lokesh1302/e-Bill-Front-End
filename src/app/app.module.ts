import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http'; 

import {RegisterService} from './register/register.service';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login' , component: LoginComponent }
];

@NgModule({
  
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    VendorRegisterComponent,
    VendorLoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})


export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
