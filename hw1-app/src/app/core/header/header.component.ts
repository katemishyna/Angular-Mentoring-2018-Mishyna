import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {IUser, User} from '../models/user.model';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: IUser = new User();
  public authSubscription: Subscription;

  constructor(private authSvc: AuthService) {
    this.authSubscription = this.authSvc.getAuthSubject()
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
