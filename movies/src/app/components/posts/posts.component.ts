import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Movie } from 'src/app/models';

interface Post {
  title: string;
  authorName: string;
  date: Date;
  content: string;
  movie: Movie;
  image?: string;
  comments: Comment[];
}

interface Comment {
  title: string;
  authorName: string;
  date: Date;
  content: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []; 

  constructor() { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.posts[0] = { title: "bla",
                      authorName: "Noa",
                      date: new Date(),
                      content: "very good movie",
                      movie: {title: "The Lion King"},
                      comments: [{title: "OK", authorName: "Not Noa", date:new Date(), content: "balbalbalabl"},
                                 {title: "OK2", authorName: "Not Noa2", date:new Date(), content: "balbalbalabl2"}]};
  }
}

