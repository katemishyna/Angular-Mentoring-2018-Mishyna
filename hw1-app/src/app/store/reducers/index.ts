import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from '../states/index';
import {authReducers} from './auth.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  authInfo: authReducers
};
