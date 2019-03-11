import {Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {IUser, User} from '../models/user.model';
import {AuthService} from '../auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnInit {
  public user: IUser = new User();

  constructor(private authSvc: AuthService,
              private ref: ChangeDetectorRef) {
    this.authSvc.authObs$
      .subscribe(() => {
        this.user = new User();
        if (this.isAuth()) {
          this.authSvc.getUserInfo()
            .subscribe((data: any) => {
                const user = {
                  id: data.id,
                  firstName: data && data.name && data.name.first,
                  lastName: data && data.name && data.name.last,
                  userToken: data.fakeToken
                };
                this.user = new User(user);
                localStorage.setItem('user', JSON.stringify(this.user));
                this.ref.markForCheck();
              },
              () => {
                this.authSvc.logOut();
                this.ref.markForCheck();
              });


        }
      });
  }

  ngOnInit() {
    const loggedUser: any = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user') || '');
    this.user = loggedUser && loggedUser.userToken ? new User(loggedUser) : new User();
  }

  public isAuth() {
    return this.authSvc.isAuth();
  }

  public logout() {
    this.user.userToken = '';
    this.authSvc.logOut();
  }
}
