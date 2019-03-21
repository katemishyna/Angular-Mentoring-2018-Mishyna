import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {IAppState} from '../../store/states/index';
import {Login} from '../../store/actions/auth.actions';
import {selectAuthResult} from '../../store/selectors/auth.selectors';

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
  public authResult$ = this.store.pipe(select(selectAuthResult));


  constructor(private ref: ChangeDetectorRef,
              private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.authResult$.subscribe((isFailed: boolean) => {
      this.isError = isFailed;
      this.ref.markForCheck();
    })
  }

  public signIn() {
    this.ref.markForCheck();
    this.store.dispatch(new Login({login: this.login, password: this.password}));
  }
}
