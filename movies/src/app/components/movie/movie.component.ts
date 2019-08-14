import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import * as io from 'socket.io-client';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';


import { Movie } from 'src/app/models';
import { NewMovieComponent } from '../new-movie/new-movie.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieList: Movie[];
  isAdmin;
  socket;
  isEditing;
  constructor(private movieService: MovieService, public dialog: MatDialog, private Auth: AuthenticationService) {
    this.socket = io('http://localhost:3001');
  }

  ngOnInit() {
    this.isEditing = false;
    this.isAdmin = this.Auth.isLoggedIn;
    this.get_movies();
    this.socket.on("refreshMovie", () => {
      this.get_movies();
    })
  }

  get_movies() {
    this.movieService.get_movies().subscribe(
      (res: Movie[]) => {
        this.movieList = res
      },
      err => {
        console.log("Error occured");
      });
  }
  create_movie(movie) {
    console.log(movie)
    if (movie) {
      this.movieService.create_movie(movie).subscribe();
    }
  }
  editMovie(movie: Movie) {
  }
  deleteMovie(movie: Movie) {
    this.movieService.delete_movie(movie).subscribe();
  }
  onEditToggle() {
    if (this.isEditing) {

      console.log(this.isEditing);
    }
    else {
      this.isEditing = true;
    }
  }
  open() {
    let dialogRef = this.dialog.open(NewMovieComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(movie => {
      if (movie) {
        this.create_movie(movie)
      }
    });

  }
}
