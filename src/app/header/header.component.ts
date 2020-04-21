import {Component, OnInit} from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  username: string;
  fullName: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.statusChange.subscribe(userData => {
      console.log('userData', userData);
      if (userData) { // Si es distinto de null, el usuario está logueado
        this.isLoggedIn = true;
        this.username = userData.username;
        this.fullName = userData.fullName;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  logout() {
    this.userService.performLogout();
  }
}
