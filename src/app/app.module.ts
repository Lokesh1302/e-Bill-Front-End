import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import {RegisterService} from './register/register.service';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule , Routes } from '@angular/router';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

const routes: Routes = [
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})


export class AppModule { }
