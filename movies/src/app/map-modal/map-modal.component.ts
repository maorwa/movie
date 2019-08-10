import { Component, OnInit } from '@angular/core';
import { MapMarker } from 'src/app/models/map-marker';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css']
})
export class MapModalComponent implements OnInit {

  mapTitle: string = 'The movies production location';
  latCenter: number = 51.678418;
  lngCenter: number = 7.809007;
  zoom: number = 4;
  public markers: Array<MapMarker> = new Array<MapMarker>();

  constructor() { }

  ngOnInit() {
    this.getEventLocationsForMap();

    // Set the center of the map
    if (this.markers.length > 0) {
      this.latCenter = this.markers[0].lat;
      this.lngCenter = this.markers[0].lng;
    }
  }

  // Set the marked places that exist in the calendar to the map
  getEventLocationsForMap() {
    this.markers[0] = ({label: 'bla', lat: 1, lng: 1, draggable: false});
    this.markers[1] = ({label: 'bla2', lat: 1, lng: 6, draggable: false});
    this.markers[2] = ({label: 'bla3', lat:5, lng: 4, draggable: false});
    // this.markers = this.tripEvents.map(event => event.LocationCoordinates);
  }
}
