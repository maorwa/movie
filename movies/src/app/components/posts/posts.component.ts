import { Component, OnInit } from '@angular/core';
import { MatCardModule, MatDialog } from '@angular/material';
import { PostService } from '../../services/post.service';
import { NewPostComponent } from '../new-post/new-post.component'
import { AuthenticationService } from '../../services/authentication.service';
import * as io from 'socket.io-client';
import { Post } from 'src/app/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
    posts: Post[] = []; 
    isAdmin;
    socket;

    constructor(public postService: PostService, public dialog: MatDialog, private Auth: AuthenticationService) { 
      this.socket = io('http://localhost:3001');
    }
  
    ngOnInit() {
      this.get_posts();
      this.isAdmin = this.Auth.isLoggedIn;
      this.socket.on("refreshPost", () => {
        this.get_posts();
      })
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
      this.postService.create_post(post).subscribe();
    }

    deleteMovie(post: Post){
      console.log(post);
      this.postService.delete_Post(post).subscribe();
    }

    open() {
      let dialogRef = this.dialog.open(NewPostComponent);
      dialogRef.afterClosed().subscribe(post => {
        this.create_post(post)
      });
    }
  }
