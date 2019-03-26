import {createSelector} from '@ngrx/store';
import {IAppState} from '../states/index';
import {ICoursesState} from '../states/courses.state';

const selectCourses = (state: IAppState) => state.coursesInfo;

export const selectCoursesList = createSelector(
  selectCourses,
  (state: ICoursesState) => state.courses
);

