import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';
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
  public isLoginFailed = false;
  public authResult$ = this.store.pipe(select(selectAuthResult));
  private unsubscribe: Subject<void> = new Subject();
  public loginForm: FormGroup;
  submitted = false;


  constructor(private ref: ChangeDetectorRef,
              private formBuilder: FormBuilder,
              private store: Store<IAppState>) {
    this.loginForm = this.formBuilder.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
      },
      {
        validator: this.loginFailedValidation.bind(this)
      });
  }

  ngOnInit() {

    this.authResult$.pipe(takeUntil(this.unsubscribe)).subscribe((isFailed: boolean) => {
      this.isLoginFailed = isFailed;
      this.loginForm.updateValueAndValidity();
      this.ref.markForCheck();
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  get f() {
    return this.loginForm.controls;
  }

  get login(): string {
    return this.loginForm.value.login
  }

  get password(): string {
    return this.loginForm.value.password;
  }

  public signIn() {
    this.submitted = true;

    if (this.loginForm.invalid && !this.isLoginFailed) {
      return;
    }
    this.ref.markForCheck();
    this.store.dispatch(new Login({login: this.login, password: this.password}));
  }

  private loginFailedValidation(group: FormGroup) {
    if (this.isLoginFailed) {
      const login = group.controls.login;
      const password = group.controls.password;
      if (!this.isLoginFailed) return null;
      return login.errors || password.errors ? null : {isLoginFailed: true};
    }
  }
}
