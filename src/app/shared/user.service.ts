import {Injectable, EventEmitter} from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn = false;
  public statusChange: any = new EventEmitter<any>();

  constructor() {}

  performLogin() {
    this.isLoggedIn = true;

    const userData = {
      username: 'test123',
      fullName: 'John Doe'
    };

    this.statusChange.emit(userData);
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

  performLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.isLoggedIn = false;
        this.statusChange.emit(null);
      });
  }
}
