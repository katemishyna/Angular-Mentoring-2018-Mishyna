import {ICourse} from '../../courses/models/course-item.model';
export interface ICoursesState {
  courses: ICourse[] | []
}

export const initialCoursesState: ICoursesState = {
  courses: []
};
