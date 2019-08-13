import { Component, OnInit } from '@angular/core';
import { MatCardModule, MatDialog } from '@angular/material';
import { PostService } from '../../services/post.service';
import { NewPostComponent } from '../new-post/new-post.component'
import { CommentService } from '../../services/comment.service';
import { NewCommentComponent } from '../new-comment/new-comment.component'
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

    constructor(public postService: PostService, private commentService: CommentService, public dialog: MatDialog, private Auth: AuthenticationService) { 
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
    create_comment(comment){
      this.commentService.create_post(comment).subscribe();
    }

    deletePost(post: Post){
      this.postService.delete_Post(post).subscribe();
    }

    openNewPostView() {
      let dialogRef = this.dialog.open(NewPostComponent,{
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(post => {
        if(post){
        this.create_post(post)
      }
      });
    }
    openNewCommentView(post) {
      let dialogRef = this.dialog.open(NewCommentComponent,{
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(comment => {
        if(comment){
          comment.postID = post._id;
        this.create_comment(comment)
      }
      });
    }
    deleteComment(comment){
      this.commentService.delete_comment(comment).subscribe();
    }
  }
