import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as myGlobals from 'globals';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private _loginUserURL = myGlobals.localhost + "/e-list/api/customer/login";
  constructor(private _http: HttpClient) { }

  loginUser(body) {

    return this._http.post(this._loginUserURL, body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  validateCustomer(customer) {
    console.log(customer);
    var body = new HttpParams()
      .set('email', customer.email)
      .set('password', customer.password);
    this.loginUser(body);
  }

}
