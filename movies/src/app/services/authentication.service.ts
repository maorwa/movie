import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Account } from 'src/app/models';

interface authMessage {
success: boolean,
message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn')||'false');

  constructor(private HttpClient:HttpClient) { }
  
  private url = "http://localhost:3001/api/account/login";
  
  getUserDetails(email,password){
    return this.HttpClient.post<authMessage>(this.url,{
      email,
      password
    })
  }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn','true');
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn')|| this.loggedInStatus.toString());
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
