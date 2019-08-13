import { Pipe, PipeTransform } from "@angular/core";
import * as AhoCorasick from "AhoCorasick";

@Pipe({
  name: "movieProductionYearFilter"
})
export class MovieProductionYearPipe implements PipeTransform {
  transform(movies: any, args?: any): any {
    if (args == undefined || args == "") {
      return movies;
    }
    let matches = [];
    let args1 = args.toString();
    let ac = new AhoCorasick([args1]);
    movies.forEach(movie => {
      let results = ac.search(movie.year.toString());
      if (results.length > 0) {
        matches.push(movie);
      }
    });

    return matches;
  }
}
