import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from 'src/app/models';
import { json } from 'd3';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private url = "http://localhost:3001/api/movie"
  constructor(private HttpClient:HttpClient) { }

  get_movies(): Observable<any>{
    return this.HttpClient.get<Movie>(this.url);
  }

  create_movie(){

  }

  update_movie(){

  }
  
  delete_movie(movie: Movie){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body:{"_id": movie._id}
    };
    return this.HttpClient.delete<Movie>(this.url,httpOptions);
  }
}