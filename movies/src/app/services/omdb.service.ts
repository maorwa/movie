import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieComponent } from 'src/app/components/movie/movie.component'

import { Movie } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  movieList : Movie[]; 
  constructor(private HttpClient:HttpClient,private MovieComponent: MovieComponent) { }


}
