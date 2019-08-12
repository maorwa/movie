import { Pipe, PipeTransform } from '@angular/core';
import * as AhoCorasick from 'AhoCorasick';

@Pipe({
  name: 'movieProductionYearFilter'
})
export class MovieProductionYearPipe implements PipeTransform {

  transform(movies: any, args?: any): any {
    if (args == undefined || args == "") {
      return movies;
    }
    let matches = [];
    let ac = new AhoCorasick([args.toLowerCase()]);
    movies.forEach(movie => {
      let results = ac.search(movie.year.toLowerCase());
      if (results.length > 0) {
        matches.push(movie);
      }
    });

    return matches;
  }
}
