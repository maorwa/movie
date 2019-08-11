import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Canvas
    var c: any = document.getElementById("TitleSearchCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    
    // Create gradient (Multi color text)
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0","#07080c");
    gradient.addColorStop("0.5", "#8aa2f0");
    gradient.addColorStop("1.0", "rgb(154, 122, 243)");

    // Fill with gradient
    ctx.strokeStyle = gradient;
    ctx.strokeText("Search A Movie", 20, 40);
    
  }
}
