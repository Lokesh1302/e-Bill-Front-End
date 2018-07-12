import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['../register/register.component.css' , '../register/register.component.style.css']
})
export class VendorRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerVendor()
  {
    console.log("Registering Vendor!!");
    this.router.navigate(['/registerVendor']);
  }
}
