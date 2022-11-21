import { Component, OnInit } from '@angular/core';
import { Emitters } from "../../emitters/emitters";
import { User } from "../../interfaces/user";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Welcome';
  description: string = 'Share links to earn money';
  dollarSign = faDollarSign;

  constructor() { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe({
      next: (user: User) => {
        if(user) {
          this.title = `${user.revenue}`;
          this.description = 'You have earned this far.'
        }
      }
    });
  }

}
