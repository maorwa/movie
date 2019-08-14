import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatDialog, MatDialogRef } from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  isLoggedIn
  constructor(private auth: AuthenticationService,private router: Router) {
    this.isLoggedIn = this.auth.isLoggedIn();
   }
  ;
  ngOnInit() {
  
  }
  logoutSession(){
    this.auth.logout();
    this.router.navigate(["/"]); 
  }

}
