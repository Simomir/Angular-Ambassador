import { EventEmitter } from "@angular/core";
import { User } from "../interfaces/user";

export class Emitters {
  static _user: any;
  static authEmitter = new EventEmitter<User|null>()

  static set user( user: any ) {
    this._user = user;
    this.authEmitter.emit(user);
  }

  static get user(): any {
    return this._user;
  }
}
