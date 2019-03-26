import { Action } from '@ngrx/store';

export enum EAuthActions {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailed = '[Auth] Login Failed',
  Logout = '[Auth] Logout'
}

export class Login implements Action {
  public readonly type = EAuthActions.Login;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  public readonly type = EAuthActions.LoginSuccess;
  constructor(public payload: any) {}
}

export class LoginFailed implements Action {
  public readonly type = EAuthActions.LoginFailed;
}

export class Logout implements Action {
  public readonly type = EAuthActions.Logout;
}

export type AuthActions = Login | LoginSuccess | LoginFailed | Logout;
