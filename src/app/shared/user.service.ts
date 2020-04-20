import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn = false;

  constructor() {}

  performLogin() {
    this.isLoggedIn = true;
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }
}
