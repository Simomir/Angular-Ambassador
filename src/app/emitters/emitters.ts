import { EventEmitter } from "@angular/core";
import { User } from "../interfaces/user";

export class Emitters {
  static _user: User;
  static authEmitter = new EventEmitter<User|null>()

  static set user(user: User) {
    this._user = user;
    this.authEmitter.emit(user);
  }

  static get user(): User {
    return this._user;
  }
}
