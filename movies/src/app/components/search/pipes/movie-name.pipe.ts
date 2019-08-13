import { Pipe, PipeTransform } from "@angular/core";
import * as AhoCorasick from "AhoCorasick";

@Pipe({
  name: "movieNameFilter"
})
export class MovieNamePipe implements PipeTransform {
  transform(movies: any, args?: any): any {
    if (args == undefined || args == "") {
      return movies;
    }
    let matches = [];
    let ac = new AhoCorasick([args.trim().toLowerCase()]);
    movies.forEach(movie => {
      let results = ac.search(movie.title.trim().toLowerCase());
      if (results.length > 0) {
        matches.push(movie);
      }
    });

    return matches;
  }
}
