import { Component, OnInit } from '@angular/core';
import { MatCardModule, MatDialog } from '@angular/material';
import { PostService } from '../../services/post.service';
import { NewPostComponent } from '../new-post/new-post.component'
import { AuthenticationService } from '../../services/authentication.service';
import { Post } from 'src/app/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
    posts: Post[] = []; 
    isAdmin;

    constructor(public postService: PostService, public dialog: MatDialog, private Auth: AuthenticationService) { }
  
    ngOnInit() {
      this.get_posts();
      this.isAdmin = this.Auth.isLoggedIn;
    }

    get_posts(){
      this.postService.get_posts().subscribe(
        (res : Post[]) => {
            this.posts = res
        },
        err => {
           console.log("Error occured");
        });
    }

    create_post(post){
      this.postService.create_post(post).subscribe( () => {
        this.get_posts();
      });
    }

    deleteMovie(post: Post){
      this.postService.delete_Post(post).subscribe( () => {
        this.get_posts();
      });
    }

    open() {
      let dialogRef = this.dialog.open(NewPostComponent);
      dialogRef.afterClosed().subscribe(post => {
        this.create_post(post)
      });
    }
  }
