import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  public login = '';
  public password = '';
  public isError = false;

  constructor(private authSvc: AuthService,
              private router: Router,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  public signIn() {
    this.isError = false;
    this.ref.markForCheck();
    this.authSvc
      .logIn(this.login, this.password)
      .subscribe((data: any) => {
          const firstName = data && data.name && data.name.first || '';
          const lastName = data && data.name && data.name.last || '';
          this.authSvc.isAuthenticated = true;
          this.authSvc.sendUserInfoToHeader(data.token);
          this.router.navigate(['courses'])
        },
        (error) => {
          this.isError = true;
          this.ref.markForCheck();
        })
  }
}
