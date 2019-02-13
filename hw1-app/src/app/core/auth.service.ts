import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/internal/observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class AuthService {
  public isAuthenticated = false;
  public authObs$: Observable;

  private authSubject = new Subject();

  constructor(private router: Router) {
    this.authObs$ =  this.authSubject.asObservable();
  }

  public logIn(email: string, password: string) {
    this.router.navigate(['courses']);
    this.isAuthenticated = true;
    localStorage.setItem('userInfo', JSON.stringify({id: email, firstName: 'Kate', lastName: 'Mishyna'}));
    this.authSubject.next();
  }

  public logOut() {
    this.router.navigate(['login']);
    this.isAuthenticated = false;
    localStorage.removeItem('userInfo');
  }

  public getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo') || '');
  }

  public isAuth() {
    return this.isAuthenticated;
  }
}
