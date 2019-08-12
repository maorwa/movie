import { Pipe, PipeTransform } from '@angular/core';
import * as AhoCorasick from 'AhoCorasick';

@Pipe({
  name: 'movieProductionCountryFilter'
})
export class MovieProductionCountryPipe implements PipeTransform {

  transform(movies: any, args?: any): any {
    if (args == undefined || args == "") {
      return movies;
    }
    let matches = [];
    let ac = new AhoCorasick([args.toLowerCase()]);
    movies.forEach(movie => {
      let results = ac.search(movie.country.toLowerCase());
      if (results.length > 0) {
        matches.push(movie);
      }
    });

    return matches;
  }

}
