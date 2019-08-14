import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  email;
  name;
  password;
  constructor(public dialogRef: MatDialogRef<NewAccountComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    try{
      let post = {
        email: this.email,
        name: this.name,
        password: this.password
      }
      this.dialogRef.close(post);
    }catch(e){}
  }

}
