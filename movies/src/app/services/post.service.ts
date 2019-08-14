import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { Post } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url = "http://localhost:3001/api/post"
  constructor(private HttpClient:HttpClient, private auth: AuthenticationService) { }

  get_posts(): Observable<any>{
    return this.HttpClient.get<Post>(this.url);
  }

  create_post(post){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }) 
    };
    return this.HttpClient.post(this.url,post ,httpOptions);
  }
  
  delete_Post(post: Post){
    let idToken = this.auth.getToken();
    if (idToken) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body:{"_id": post._id,
        "token": idToken}
    };
    return this.HttpClient.delete<Post>(this.url,httpOptions);
  }}
}