import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = "http://localhost:3001/api/comment"
  constructor(private HttpClient:HttpClient, private auth: AuthenticationService) { }

  create_comment(comment){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }) 
    };
    return this.HttpClient.post(this.url,comment ,httpOptions);
  }
  
  delete_comment(comment: Comment){
    let idToken = this.auth.getToken();
    if (idToken) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body:{"_id": comment._id,
            "token": idToken}
    };
    return this.HttpClient.delete<Comment>(this.url,httpOptions);
  }}
}
