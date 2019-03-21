import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {AuthService} from '../../core/auth.service';
import {EAuthActions, LoginFailed, Login, LoginSuccess} from '../actions/auth.actions';
import {map, switchMap, catchError, tap} from 'rxjs/internal/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private authService: AuthService,
              private actions$: Actions,
              private router: Router) {
  }

  @Effect()
  $login = this.actions$.pipe(
    ofType(EAuthActions.Login),
    map((action: Login) => action.payload),
    switchMap(payload => {
      return this.authService.logIn(payload.login, payload.password)
        .pipe(
          map((userData: any) => {
            this.router.navigate(['courses']);
            const user = {
              id: userData.id,
              firstName: userData.name.first,
              lastName: userData.name.last,
              userToken: userData.fakeToken
            };
            localStorage.setItem('user', JSON.stringify(user));
            return new LoginSuccess(user);
          }),
          catchError((error) => {
            return of(new LoginFailed());
          })
        )
    })
  );

  @Effect(({dispatch: false}))
  $logout = this.actions$.pipe(
    ofType(EAuthActions.Logout),
    tap(() => {
      localStorage.clear();
      this.router.navigate(['login']);
    })
  );

  @Effect(({dispatch: false}))
  $loginSuccess = this.actions$.pipe(
    ofType(EAuthActions.LoginSuccess),
    map((action: LoginSuccess) => action.payload),
    tap((userData) => {
      localStorage.setItem('token', JSON.stringify(userData.userToken));
    })
  )
}
