import {IUser} from '../../core/models/user.model';

export interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  isAuthFailed: boolean;

}

export const initialAuthState: IAuthState = {
  user: null,
  isAuthenticated: false,
  isAuthFailed: false
};
