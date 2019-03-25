import {IAuthState, initialAuthState} from './auth.state';
import {initialCoursesState, ICoursesState} from './courses.state';

export interface IAppState {
  authInfo: IAuthState;
  coursesInfo: ICoursesState
}

export const initialAppState: IAppState = {
  authInfo: initialAuthState,
  coursesInfo: initialCoursesState
};

