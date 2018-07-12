import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {Router} from "@angular/router";
=======
import { RegisterService } from '../register/register.service';
import { NgForm } from '@angular/forms';

>>>>>>> 977e8eac69bfafa6f205398ddcbda6d2c3e604cc

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css' , './register.component.style.css']
})
export class RegisterComponent implements OnInit {

<<<<<<< HEAD
  constructor(private router:Router) { }
=======
  constructor(private registerService: RegisterService) {
    
  }
  registerCustomer(form : NgForm) {
    console.log(form.value);
  }
>>>>>>> 977e8eac69bfafa6f205398ddcbda6d2c3e604cc

  ngOnInit() {
  }
  
<<<<<<< HEAD
=======
  
>>>>>>> 977e8eac69bfafa6f205398ddcbda6d2c3e604cc
}
