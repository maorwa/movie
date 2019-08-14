import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = "http://localhost:3001/api/comment"
  constructor(private HttpClient:HttpClient) { }

  create_comment(comment){
    console.log(comment);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }) 
    };
    return this.HttpClient.post(this.url,comment ,httpOptions);
  }
  
  delete_comment(comment: Comment){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body:{"_id": comment._id}
    };
    return this.HttpClient.delete<Comment>(this.url,httpOptions);
  }
}
