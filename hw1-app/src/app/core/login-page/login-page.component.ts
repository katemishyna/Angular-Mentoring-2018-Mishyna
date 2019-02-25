import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email = '';
  public password = '';

  constructor(private authSvc: AuthService) {
  }

  ngOnInit() {
  }

  public login() {
    this.authSvc.logIn(this.email, this.password);
  }
}
