import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  msg: string;
  email: string;
  password: string;

  signIn() {
    this.authService.logIn({ email: this.email, password: this.password })
      .then(resolve => this.router.navigate(['gallery']))
      .catch(error => this.msg = error.message);
  }

  ngOnInit() {
  }

}
