import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.css' , '../register/register.component.style.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerCustomer()
  {
    console.log("Registering Customer!!");
    this.router.navigate(['/register']);
  }
}
