import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Movie } from 'src/app/models';



@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private url = "http://localhost:3001/api/movie"
  constructor(private HttpClient:HttpClient) { }

  get_movies(): Observable<any>{
    return this.HttpClient.get<Movie>(this.url);
  }


  getMoviesByFilter() {
    return this.HttpClient
    .get(this.url)
    .pipe(
      map((movies: any) => { 
        return movies.movie;
      })
    )
    .toPromise();
  }

  create_movie(movie){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }) 
    };
    return this.HttpClient.post(this.url,movie ,httpOptions);
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