import { Pipe, PipeTransform } from '@angular/core';
import * as AhoCorasick from "AhoCorasick";

@Pipe({
  name: 'postTitleFilter'
})
export class PostTitlePipe implements PipeTransform {

  transform(posts: any, args?: any): any {
    if (args == undefined || args == "") {
      return posts;
    }
    let matches = [];
    let ac = new AhoCorasick([args.trim().toLowerCase()]);
    posts.forEach(post => {
      let results = ac.search(post.title.trim().toLowerCase());
      if (results.length > 0) {
        matches.push(post);
      }
    });

    return matches;
  }

}
