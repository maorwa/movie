import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from 'src/app/models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
   movieList : Movie[];
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.get_movies()
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
