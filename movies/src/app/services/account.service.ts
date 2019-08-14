import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = "http://localhost:3001/api/account"
  constructor(private HttpClient:HttpClient, private auth: AuthenticationService) { }
  
  get_accounts(): Observable<any>{
    return this.HttpClient.get<Account>(this.url);
  }

  create_account(account){
    let idToken = this.auth.getToken();
    if (idToken) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }) 
    };
    account.token = idToken;
    return this.HttpClient.post(this.url,account ,httpOptions);
 }
}
  
  delete_account(account: Account){
    let idToken = this.auth.getToken();
    if (idToken) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body:{"_id": account._id,
          "token": idToken
    }
    };
    return this.HttpClient.delete<Account>(this.url,httpOptions);
  }}
}
