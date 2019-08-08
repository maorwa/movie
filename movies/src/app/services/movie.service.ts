import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = "http://localhost:3001/api/movie"
  constructor(private HttpClient:HttpClient) { }

  get_movies(): Observable<any>{
    return this.HttpClient.get<Movie>(this.url);
  }

  delete_movie(){
    
  }
}
