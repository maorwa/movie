import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeather() {
    return fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Holon&appid=05e01b3554f9e1b0d32d1e4e86517e4c&units=metric"
    ).then(res => res.json());
  }
}
