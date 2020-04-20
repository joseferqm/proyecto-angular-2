import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

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
      // console.log(':( usuario incorrecto');

      this.toastr.error('Error al loguear', 'Error!');
    }
  }
}
