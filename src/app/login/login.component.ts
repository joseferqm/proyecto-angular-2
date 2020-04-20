import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    // console.log('email', email);
    // console.log('password', password);

    if (email === 'test@test.com' && password === 'test123') {
      console.log(':) usuario correcto!');

      this.userService.performLogin();
      this.router.navigate(['/home']);
    } else {
      console.log(':( usuario incorrecto');
    }
  }
}
