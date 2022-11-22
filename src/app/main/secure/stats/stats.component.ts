import { Component, OnInit } from '@angular/core';
import { StatsService } from "../../../services/stats.service";
import { Link } from "../../../interfaces/link";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  links!: any[];

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.statsService.stats().subscribe({
      next: value => { this.links = value;}
    });
  }

}
