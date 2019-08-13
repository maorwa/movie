import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  comment;
  title;
  authorName;
  content;
  constructor( public dialogRef: MatDialogRef<NewCommentComponent>) { }

  ngOnInit() {
  }
  closeDialog() {
    let post = {
      author: this.authorName,
      content: this.content
    }
    this.dialogRef.close(post);
  }

}
