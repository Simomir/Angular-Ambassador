import { Component, OnInit } from '@angular/core';
import { StatsService } from "../../../services/stats.service";
import { Ranking } from "../../../interfaces/rankings";

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  rankings: Ranking[] = [];

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.statsService.rankings().subscribe({
      next: value => {
        this.rankings = Object.values( value ).sort(function ( a, b ) {
          return b['revenue'] - a['revenue'];
        })
      }
    });
  }
}
