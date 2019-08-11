import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post = { title: "bla",
            authorName: "Noa",
            Date: new Date(),
            content: "very good movie",
            movie: {name: "The Lion King"}};

  constructor() { }

  ngOnInit() {
  }

}
