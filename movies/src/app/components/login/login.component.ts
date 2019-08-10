import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private Auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    
  }

  loginUser(){
    this.Auth.getUserDetails(this.email,this.password).subscribe(data =>{
      if(data.success){
        this.router.navigate(['Management']);
        this.Auth.setLoggedIn(true);
        console.log(data.message);
      }else{
        window.alert(data.message);
      }
    })
  }

}
