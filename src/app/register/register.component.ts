import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { RegisterService } from '../register/register.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css' , './register.component.style.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) {
    
  }
  registerCustomer(form : NgForm) {
    this.registerService.registerCustomer(form.value);
  }

  ngOnInit() {
  }
  

}
