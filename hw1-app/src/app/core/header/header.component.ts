import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {IUser, User} from '../models/user.model';
import {AuthService} from '../auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: IUser = new User();

  constructor(private authSvc: AuthService) {
    this.authSvc.authObs$
      .subscribe(() => {
        this.user = new User();
        if (this.isAuth()) {
          this.user = new User(this.authSvc.getUserInfo());
        }
      });
  }

  ngOnInit() {
  }

  public isAuth() {
    return this.authSvc.isAuth();
  }

  public logout() {
    this.authSvc.logOut();
  }
}
