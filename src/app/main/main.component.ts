import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Emitters } from "../emitters/emitters";
import { User } from "../interfaces/user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.user().subscribe({
      next: (user: User) => Emitters.user = user,
      error: () => Emitters.user = null
    });
  }

  isMainPage(): boolean {
    const url = this.router.url;
    return url === '/' || url === '/backend';
  }
}
