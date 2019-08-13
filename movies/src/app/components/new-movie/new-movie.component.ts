import { Component, OnInit } from '@angular/core';
import { MatCardModule, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  title;
  year

  constructor(public dialogRef: MatDialogRef<NewMovieComponent>) { }
 
  ngOnInit() {}

  closeDialog() {
    let post = {
      title: this.title,
      year: this.year
    }
    this.dialogRef.close(post);
  }
}