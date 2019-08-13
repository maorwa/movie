import { Component, OnInit } from '@angular/core';
import { MatCardModule, MatDialog, MatDialogRef} from '@angular/material';
import { MovieService } from '../../services/movie.service';

import { Movie } from 'src/app/models';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  movieList : Movie[];
  movie;
  title;
  authorName;
  content;

  constructor(private movieService: MovieService, public dialogRef: MatDialogRef<NewPostComponent>) { }
 
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
  closeDialog() {
    let post = {
      movie:this.movie.title,
      title: this.title,
      author: this.authorName,
      content: this.content
    }
    this.dialogRef.close(post);
  }
}
