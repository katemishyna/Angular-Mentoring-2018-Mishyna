import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/internal/observable';
import {Subject} from 'rxjs/internal/Subject';
import {HttpClient} from '@angular/common/http';
import {mergeMap} from 'rxjs/internal/operators';

const BASE_URL = 'http://localhost:3004';

@Injectable()
export class AuthService {
  public isAuthenticated: boolean;
  public authObs$: Observable<any>;
  public currentToken = '';

  private authSubject = new Subject();

  constructor(private router: Router,
              private http: HttpClient) {
    this.authObs$ = this.authSubject.asObservable();
    const loggedUser = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user') || '');
    this.isAuthenticated = !!(loggedUser && loggedUser.userToken);
  }

  public logIn(login: string, password: string) {
    return this.http.post(`${BASE_URL}/auth/login`, {login, password}).pipe(
      mergeMap((data: any) => {
        this.currentToken = data.token
        return this.getUserInfo();
      })
    );
  }

  public sendUserInfoToHeader(userData: string) {
    this.authSubject.next(userData);
  }

  public logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
    this.isAuthenticated = false;
    this.currentToken = '';
  }

  public getToken() {
    return this.currentToken;
  }

  public getUserInfo() {
    return this.http.post(`${BASE_URL}/auth/userinfo`, {});
  }

  public isAuth() {
    return this.isAuthenticated;
  }
}
