import {IAuthState, initialAuthState} from './auth.state';

export interface IAppState {
  authInfo: IAuthState;
}

export const initialAppState: IAppState = {
  authInfo: initialAuthState
};

export function getInitialState(): IAppState {
  return initialAppState;
}

