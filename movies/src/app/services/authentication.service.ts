import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import moment from "moment";

import { Account } from 'src/app/models';

interface authMessage {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  //private loggedInStatus = JSON.parse(localStorage.getItem('token_id') || 'false');

  constructor(private HttpClient: HttpClient) { }

  private url = "http://localhost:3001/api/account/login";

  getUserDetails(email, password) {
    return this.HttpClient.post<authMessage>(this.url, {
      email,
      password
    })
  }

  setLoggedIn(message) {
    const expiresAt = moment().add(message.expiresIn, 'second');
    localStorage.setItem("token_id", JSON.stringify(message["token_id"].valueOf()));
    const test = localStorage.getItem("token_id");
    const test1 = JSON.parse(test).valueOf();
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    return true;
  }
  logout() {
    localStorage.removeItem("token_id");
    localStorage.removeItem("expires_at");
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }
  getToken(){
    if(this.isLoggedIn()){
      const token = localStorage.getItem("token_id");
      const JsonToken = JSON.parse(token);
      return JsonToken;
    }
  }
  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
