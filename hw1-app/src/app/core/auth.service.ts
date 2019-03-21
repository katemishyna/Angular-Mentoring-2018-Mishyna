import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {mergeMap} from 'rxjs/internal/operators';
import {selectAuthStatus} from '../store/selectors/auth.selectors';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../store/states/index';
import {LoginSuccess} from '../store/actions/auth.actions';

const BASE_URL = 'http://localhost:3004';

@Injectable()
export class AuthService {
  public isAuthenticated: boolean = false;
  public authInfo$ = this.store.pipe(select(selectAuthStatus));

  constructor(private router: Router,
              private http: HttpClient,
              private store: Store<IAppState>) {
    this.subscribeOnAuthStatus();
    this.checkAuthState();
  }

  public logIn(login: string, password: string) {
    return this.http.post(`${BASE_URL}/auth/login`, {login, password}).pipe(
      mergeMap((data: any) => {
        localStorage.setItem('token', JSON.stringify(data.token));
        return this.getUserInfo();
      })
    );
  }

  public getToken() {
    return localStorage.getItem('token') && JSON.parse(localStorage.getItem('token') || '');
  }

  public getUserInfo() {
    return this.http.post(`${BASE_URL}/auth/userinfo`, {});
  }

  public isAuth() {
    return this.isAuthenticated;
  }

  private checkAuthState() {
    const loggedUser = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user') || '');
    if (loggedUser && loggedUser.userToken) {
      this.store.dispatch(new LoginSuccess(loggedUser));
    }
  }

  private subscribeOnAuthStatus() {
    this.authInfo$.subscribe((isAuth: boolean) => {
      this.isAuthenticated = isAuth;
    });
  }
}
