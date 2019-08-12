import { Component, OnInit } from '@angular/core';
import { MatCardModule, MatDialog } from '@angular/material';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../../services/post.service';
import { NewPostComponent } from '../new-post/new-post.component'
import { Post } from 'src/app/models'; 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
    posts: Post[] = []; 
  
    constructor(public postService: PostService, public dialog: MatDialog ) { }
  
    ngOnInit() {
      this.get_posts();
    }

    get_posts(){
      this.postService.get_posts().subscribe(
        (res : Post[]) => {
            this.posts = res
            console.log(res);
        },
        err => {
           console.log("Error occured");
        });
    }

    create_post(post){
      this.postService.create_post(post).subscribe();
    }

    open() {
      this.dialog.open(NewPostComponent);
    }
  }
