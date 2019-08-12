import { Component, OnInit } from '@angular/core';
import { MapMarker } from 'src/app/models/map-marker';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models';

@Component({
  selector: 'app-map-model',
  templateUrl: './map-model.component.html',
  styleUrls: ['./map-model.component.css']
})
export class MapModelComponent implements OnInit {

  mapTitle: string = 'The movies production location';
  latCenter: number = 31.0461;
  lngCenter: number = 34.8516;
  zoom: number = 1;
  public markers: Array<MapMarker> = new Array<MapMarker>();
  movieList: Movie[];
  countryDataset = [
    {
      "lat": 37.09024,
      "lng": -95.712891,
      "name": "USA"
    },
    {
      "lat": 31.046051,
      "lng": 34.851612,
      "name": "Israel"
    },
    {
      "lat": 46.227638,
      "lng": 2.213749,
      "name": "France"
    }
  ];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.get_movies();
    // Set the center of the map
    if (this.markers.length > 0) {
      this.latCenter = this.markers[0].lat;
      this.lngCenter = this.markers[0].lng;
    }
  }

  // get movies
  get_movies(){
    this.movieService.get_movies().subscribe(
      (res : Movie[]) => {
          this.movieList = res;
          this.getEventLocationsForMap(this.movieList);
      },
      err => {
         console.log("Error occured");
      });
  }

  public getCoordinates(countryName){
    console.log(countryName);
    return this.countryDataset.find(country => country.name === countryName);
  }
  // Set the marked places that exist in the calendar to the map
  getEventLocationsForMap(movieList) {
    movieList.some(function (a) {
      console.log(a);
    });

    movieList.forEach((movie) => {
      let cord = this.getCoordinates(movie.country);
      console.log(cord);
      this.markers.push({
        label: movie.title,
        lat: cord.lat, 
        lng: cord.lng, 
        draggable: false
      });
  });
    // this.markers = this.tripEvents.map(event => event.LocationCoordinates);
  }
  
}