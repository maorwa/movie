import { Pipe, PipeTransform } from "@angular/core";
import * as AhoCorasick from "AhoCorasick";

@Pipe({
  name: "postmovieFilter"
})
export class PostMoviePipe implements PipeTransform {
  transform(posts: any, args?: any): any {
    if (args == undefined || args == "") {
      return posts;
    }
    let matches = [];
    let ac = new AhoCorasick([args.trim().toLowerCase()]);
    posts.forEach(post => {
      let results = ac.search(post.movie.title.trim().toLowerCase());
      if (results.length > 0) {
        matches.push(post);
      }
    });

    return matches;
  }
}
