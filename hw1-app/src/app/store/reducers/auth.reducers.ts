import {initialAuthState, IAuthState} from '../states/auth.state';
import {AuthActions, EAuthActions} from '../actions/auth.actions';

export function authReducers(state = initialAuthState, action: AuthActions): IAuthState {
  switch (action.type) {
    case EAuthActions.LoginSuccess: {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isAuthFailed: false
      }
    }
    case EAuthActions.Logout: {
      return initialAuthState;
    }
    case EAuthActions.LoginFailed: {
      return {
        ...state,
        isAuthFailed: true
      };
    }
    default:
      return state;
  }
};
