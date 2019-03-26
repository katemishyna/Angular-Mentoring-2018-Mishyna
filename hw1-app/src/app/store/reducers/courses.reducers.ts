import {CoursesActions, ECoursesActions} from '../actions/courses.actions';
import {initialCoursesState, ICoursesState} from '../states/courses.state';

export function coursesReducers(state = initialCoursesState, action: CoursesActions): ICoursesState {
  switch (action.type) {
    case ECoursesActions.UpdateCoursesList: {
      return {
        ...state,
        courses: action.payload,
      }
    }
    default:
      return state;
  }
};
