import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {IAppState} from '../../store/states/index';
import {Login} from '../../store/actions/auth.actions';
import {selectAuthResult} from '../../store/selectors/auth.selectors';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/internal/operators';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public login = '';
  public password = '';
  public isError = false;
  public authResult$ = this.store.pipe(select(selectAuthResult));
  private unsubscribe: Subject<void> = new Subject();

  constructor(private ref: ChangeDetectorRef,
              private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.authResult$.pipe(takeUntil(this.unsubscribe)).subscribe((isFailed: boolean) => {
      this.isError = isFailed;
      this.ref.markForCheck();
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public signIn() {
    this.ref.markForCheck();
    this.store.dispatch(new Login({login: this.login, password: this.password}));
  }
}
