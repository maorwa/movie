import { Component, OnInit } from '@angular/core';
import { MatCardModule, MatDialog} from '@angular/material';
import { MovieService } from '../../services/movie.service';
import { PostService } from '../../services/post.service';

import { Movie, Post } from 'src/app/models';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  movieList : Movie[];
  post;
  movie;
  title;
  authorName;
  content;

  constructor(private movieService: MovieService,private postService: PostService) { }
 
  ngOnInit() {
    this.get_movies();
  }

  get_movies(){
    this.movieService.get_movies().subscribe(
      (res : Movie[]) => {
          this.movieList = res
      },
      err => {
         console.log("Error occured");
      });
  }

  newPost() {

    this.post = {
      movie:this.movie.title,
      title: this.title,
      authorName: this.authorName,
      content: this.content
    }
    this.postService.create_post(this.post);
  }

}
