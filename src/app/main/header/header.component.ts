import { Component, OnInit } from '@angular/core';
import { Emitters } from "../../emitters/emitters";
import { User } from "../../interfaces/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title!: string;
  description!: string;
  user!: User;

  constructor() { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe({
      next: (user: User) => {
        this.user = user;
        this.title = user ? `${user.revenue}` : 'Welcome';
        this.description = user ? 'You have earned this far.' : 'Share links to earn money';
      }
    });
  }

}
