import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { MapModelComponent } from '../map-model/map-model.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Auth: AuthenticationService) { }

  ngOnInit() {
  }
}
