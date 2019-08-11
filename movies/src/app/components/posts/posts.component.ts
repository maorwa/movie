import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PostService } from '../../services/post.service';

import { Post } from 'src/app/models'; 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
    posts: Post[] = []; 
  
    constructor(private postService: PostService) { }
  
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
  }
