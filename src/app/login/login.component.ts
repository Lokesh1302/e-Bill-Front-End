import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.css' , '../register/register.component.style.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit() {
  }

  loginCustomer(form : NgForm) {
    this.loginService.validateCustomer(form.value);
  }
  
  registerCustomer()
  {
    console.log("Registering Customer!!");
    this.router.navigate(['/loginVendor']);
  }
}
