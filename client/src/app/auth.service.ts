import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //TEST URLS
  //===========================================================
  private loginUrl = 'http://localhost:3000/api/login';
  private registerUrl = 'http://localhost:3000/api/register';
  //===========================================================

  //PROD URLS
  //======================================
  // private loginUrl = 'api/login';
  // private registerUrl = 'api/register';
  //======================================

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  setLocalStorage(resObj) {
    //resObj.expiresIn is the wrong format for moment, don't judge me
    const expiresAt = moment().add(1, 'day');

    localStorage.setItem('id_token', resObj.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('email', resObj.email);
    localStorage.setItem('userID', resObj.id);
  }

  login(email: string, password: string) {
    const reqObj = {
      email: email,
      password: password,
    };
    this.http.post(this.loginUrl, reqObj, this.httpOptions).subscribe(
      (res) => {
        this.setLocalStorage(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('successfully logged in');
      }
    );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('email');
    localStorage.removeItem('userID');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return moment(expiresAt);
  }

  register(email: string, password: string) {
    const reqObj = {
      email: email,
      password: password,
    };
    this.http.post(this.registerUrl, reqObj, this.httpOptions).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Successfully registered, logging in user...');
        this.login(email, password);
      }
    );
  }
}
