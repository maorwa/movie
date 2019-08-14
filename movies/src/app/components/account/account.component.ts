import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import * as io from 'socket.io-client';
import {  MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { Account } from 'src/app/models';
import { NewAccountComponent } from '../new-account/new-account.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountList: Account[];
  isAdmin;
  socket;
  constructor(private accountService: AccountService, public dialog: MatDialog,  private Auth: AuthenticationService) { }

  ngOnInit() {
    this.socket = io('http://localhost:3001');
    this.isAdmin = this.Auth.isLoggedIn;
    this.get_accounts();
    this.socket.on("refreshAccount", () => {
      this.get_accounts();
    })
  }

  get_accounts() {
    this.accountService.get_accounts().subscribe(
      (res: Account[]) => {
        this.accountList = res
      },
      err => {
        console.log("Error occured");
      });
  }
  create_account(account) {
    this.accountService.create_account(account).subscribe();
  }
  deleteAccount(account: Account) {
    this.accountService.delete_account(account).subscribe();
  }

  open() {
    let dialogRef = this.dialog.open(NewAccountComponent,{
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(account => {
      if(account){
      this.create_account(account)
      }
    });

  }
}
