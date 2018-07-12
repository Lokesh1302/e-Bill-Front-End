import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['../register/register.component.css' , '../register/register.component.style.css']
})
export class VendorLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerVendor()
  {
    console.log("Registering Customer!!");
    this.router.navigate(['/registerVendor']);
  }

}
