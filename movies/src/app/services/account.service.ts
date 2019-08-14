import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = "http://localhost:3001/api/account"
  constructor(private HttpClient:HttpClient) { }
  
  get_accounts(): Observable<any>{
    return this.HttpClient.get<Account>(this.url);
  }

  create_account(account){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }) 
    };
    return this.HttpClient.post(this.url,account ,httpOptions);
  }
  
  delete_account(account: Account){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body:{"_id": account._id}
    };
    return this.HttpClient.delete<Account>(this.url,httpOptions);
  }
}
