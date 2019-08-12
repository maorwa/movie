import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieName;
  movieGenre;
  productionYear;
  productionCountry;
  currYear: number = new Date().getFullYear();
  sortedMovies = [];
  movies = [];

  constructor(private movieService = MovieService) { 
    this.getMovies = this.getMovies.bind(this);
    this.sortData = this.sortData.bind(this);
  }          

  ngOnInit() {
    // For the filter of the movies
    this.getMovies();

    // Canvas
    var c: any = document.getElementById("TitleSearchCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    
    // Create gradient (Multi color text)
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0","#07080c");
    gradient.addColorStop("0.5", "#8aa2f0");
    gradient.addColorStop("1.0", "rgb(154, 122, 243)");

    // Fill with gradient
    ctx.strokeStyle = gradient;
    ctx.strokeText("Search A Movie", 20, 40); 
  }

  getMovies() {
    this.movieService.get_movies().then((movies: any) => {
      this.movies = movies;
      this.sortedMovies = this.movies.slice();
    });
  }

  sortData(sort: Sort) {
    const data = this.movies.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedMovies = data;
      return;
    }

    this.sortedMovies = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'genre': return compare(a.genre, b.genre, isAsc);
        case 'productionYear': return compare(a.productionYear, b.productionYear, isAsc);
        case 'productionCountry': return compare(a.productionCountry, b.productionCountry, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
