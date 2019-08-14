import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { Sort } from "@angular/material";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  // Movie param
  group;
  name;
  genre;
  productionYear;
  productionCountry;
  currYear: number = new Date().getFullYear();
  sortedMovies = [];
  movies = [];

  // Post param
  title;
  authorName;
  movie;
  sortedPosts = [];
  posts = [];

  constructor(private movieService: MovieService,
              private postService: PostService) {
    this.getMovies = this.getMovies.bind(this);
    this.sortData = this.sortData.bind(this);
    this.sortPostsData = this.sortPostsData.bind(this);
  }

  ngOnInit() {
    // For the filter of the movies & posts
    this.getMovies();
    this.getPosts();
    this.groupBY();

    // Canvas
    var c: any = document.getElementById("TitleSearchCanvas");
    var c2: any = document.getElementById("PostSearchCanvas");
    var ctx = c.getContext("2d");
    var ctx2 = c2.getContext("2d");
    ctx.font = "30px Arial";
    ctx2.font = "30px Arial";

    // Create gradient (Multi color text)
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    var gradient2 = ctx2.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0", "#07080c");
    gradient2.addColorStop("0", "#07080c");
    gradient.addColorStop("0.5", "#8aa2f0");
    gradient2.addColorStop("0.5", "#8aa2f0");
    gradient.addColorStop("1.0", "rgb(154, 122, 243)");
    gradient2.addColorStop("1.0", "rgb(154, 122, 243)");

    // Fill with gradient (multi color)
    ctx.strokeStyle = gradient;
    ctx2.strokeStyle = gradient2;
    ctx.strokeText("Search A Movie", 20, 40);
    ctx2.strokeText("Search A Post", 20, 40);
  }

  getMovies() {
    this.movieService.get_movies().subscribe((movies: any) => {
      this.movies = movies;
      this.sortedMovies = this.movies.slice();
    });
  }

  sortData(sort: Sort) {
    const data = this.movies.slice();
    if (!sort.active || sort.direction == "") {
      this.sortedMovies = data;
      return;
    }

    this.sortedMovies = data.sort((a, b) => {
      let isAsc = sort.direction == "asc";
      switch (sort.active) {
        case "name":
          return compare(a.name, b.name, isAsc);
        case "genre":
          return compare(a.genre, b.genre, isAsc);
        case "productionYear":
          return compare(a.productionYear, b.productionYear, isAsc);
        case "productionCountry":
          return compare(a.productionCountry, b.productionCountry, isAsc);
        default:
          return 0;
      }
    });
  }

  // Posts func
  getPosts() {
    this.postService.get_posts().subscribe((posts: any) => {
      this.posts = posts;
      this.sortedPosts = this.posts.slice();
    });
  }
  groupBY() {
    this.postService.groupBY().subscribe((groups: any) => {
      this.group = groups;
    });
  }

  sortPostsData(sort: Sort) {
    const data = this.posts.slice();
    if (!sort.active || sort.direction == "") {
      this.sortedPosts = data;
      return;
    }
    this.sortedPosts = data.sort((a, b) => {
      let isAsc = sort.direction == "asc";
      switch (sort.active) {
        case "title":
          return compare(a.title, b.title, isAsc);
        case "authorName":
          return compare(a.authorName, b.authorName, isAsc);
        case "movie":
          return compare(a.movie, b.movie, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
