import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieComponent } from 'src/app/components/movie/movie.component'
@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private HttpClient:HttpClient) { }


}
