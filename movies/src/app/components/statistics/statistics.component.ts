import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Statistic } from 'src/app/models/statistics';
import * as d3 from 'd3';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  @ViewChild('rankingchart', { static: true }) private rankingContainer: ElementRef;
  @ViewChild('voteschart', { static: true }) private votesContainer: ElementRef;


  movies = [{ title: "The Lion King 3", ranking: 7.2, votes: 53980 }, { title: "The Lion King 4", ranking: 7.8, votes: 65923 }]

  // @Input()
  // movies: movies[];

  margin = { top: 20, right: 20, bottom: 30, left: 40 };

  constructor() { }

  ngOnInit() {
    if (!this.movies) { return; }
    this.createChart();
  }

  private createChart(): void {
    d3.select('svg').remove();

    const movies = this.movies;

    // Ranking graph
    const rankingElement = this.rankingContainer.nativeElement;

    const rankingSelection = d3.select(rankingElement).append('svg')
      .attr('width', rankingElement.offsetWidth)
      .attr('height', rankingElement.offsetHeight);

    const rankingWidth = rankingElement.offsetWidth - this.margin.left - this.margin.right;
    const rankingHeight = rankingElement.offsetHeight - this.margin.top - this.margin.bottom;

    const rankingX = d3
      .scaleBand()
      .rangeRound([0, rankingWidth])
      .padding(0.1)
      .domain(movies.map(d => d.title));

    const rankingY = d3
      .scaleLinear()
      .rangeRound([rankingHeight, 0])
      .domain([0, d3.max(movies, d => d.ranking)]);

    const rankingGraph = rankingSelection.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    rankingGraph.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + rankingHeight + ')')
      .call(d3.axisBottom(rankingX));

    rankingGraph.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(rankingY).ticks(10))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('ranking');

    rankingGraph.selectAll('.bar')
      .data(movies)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => rankingX(d.title))
      .attr('y', d => rankingY(d.ranking))
      .attr('width', rankingX.bandwidth())
      .attr('height', d => rankingHeight - rankingY(d.ranking));

    // Ranking graph
    const votesElement = this.votesContainer.nativeElement;

    const votesSelection = d3.select(votesElement).append('svg')
      .attr('width', votesElement.offsetWidth)
      .attr('height', votesElement.offsetHeight);

    const votesWidth = votesElement.offsetWidth - this.margin.left - this.margin.right;
    const votesHeight = votesElement.offsetHeight - this.margin.top - this.margin.bottom;


    const votesX = d3
      .scaleBand()
      .rangeRound([0, votesWidth])
      .padding(0.1)
      .domain(movies.map(d => d.title));

    const votesY = d3
      .scaleLinear()
      .rangeRound([votesHeight, 0])
      .domain([0, d3.max(movies, d => d.votes)]);

    const votesGraph = votesSelection.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    votesGraph.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + votesHeight + ')')
      .call(d3.axisBottom(votesX));

    votesGraph.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(votesY).ticks(10))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('votes');

    votesGraph.selectAll('.bar')
      .data(movies)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => votesX(d.title))
      .attr('y', d => votesY(d.votes))
      .attr('width', votesX.bandwidth())
      .attr('height', d => votesHeight - votesY(d.votes));
  }
}