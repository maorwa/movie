import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { Movie } from 'src/app/models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
   movieList : Movie[];
   isAdmin;

  constructor(private movieService: MovieService, private Auth: AuthenticationService) { }

  ngOnInit() {
    this.isAdmin = this.Auth.isLoggedIn;
    console.log(this.isAdmin);
    this.get_movies();
  }

  get_movies(){
    this.movieService.get_movies().subscribe(
      (res : Movie[]) => {
          this.movieList = res
          console.log(this.movieList)
      },
      err => {
         console.log("Error occured");
      });
  }
}
