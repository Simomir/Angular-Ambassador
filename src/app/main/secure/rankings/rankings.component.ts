import { Component, OnInit } from '@angular/core';
import { StatsService } from "../../../services/stats.service";

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  rankings: any[] = [];

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.statsService.rankings().subscribe({
      next: value => {this.rankings = value;}
    });
  }

}
