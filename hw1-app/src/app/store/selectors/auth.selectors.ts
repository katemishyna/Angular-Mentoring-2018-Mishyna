import { createSelector } from '@ngrx/store';
import {IAppState} from '../states/index';
import {IAuthState} from '../states/auth.state';

const selectAuthInfo = (state: IAppState) => state.authInfo;

export const selectAllAuthInfo = createSelector(
  selectAuthInfo,
  (state: IAuthState) => state
);

export const selectUserInfo = createSelector(
  selectAuthInfo,
  (state: IAuthState) => state.user
);

export const selectAuthStatus = createSelector(
  selectAuthInfo,
  (state: IAuthState) => state.isAuthenticated
);

export const selectAuthResult = createSelector(
  selectAuthInfo,
  (state: IAuthState) => state.isAuthFailed
);
