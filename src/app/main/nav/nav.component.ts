import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { User } from "../../interfaces/user";
import { Emitters } from "../../emitters/emitters";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: User|null = null;
  profileIcon = faUser;
  logoutIcon = faRightFromBracket;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe({
      next: (user: User) => this.user = user
    })
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => Emitters.authEmitter.emit(null)
    });
  }

}
