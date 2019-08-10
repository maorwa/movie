import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css']
})
export class MapModalComponent implements OnInit {

  mapTitle: string = 'The movies production location';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 4;

  constructor() { }

  ngOnInit() {
  }


}
