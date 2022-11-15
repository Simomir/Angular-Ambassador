import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Emitters } from "../emitters/emitters";
import { User } from "../interfaces/user";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user().subscribe({
      next: (user: User) => Emitters.authEmitter.emit(user),
      error: () => Emitters.authEmitter.emit(null)
    });
  }

}
