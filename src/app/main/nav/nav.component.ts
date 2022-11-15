import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { User } from "../../interfaces/user";
import { Emitters } from "../../emitters/emitters";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: User|null = null;
  profileIcon = faUser;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe({
      next: (user: User) => this.user = user
    })
  }

}
