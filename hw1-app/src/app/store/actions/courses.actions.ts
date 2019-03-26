import {Action} from '@ngrx/store';

export enum ECoursesActions {
  GetCourses = '[Courses] Get Courses',
  UpdateCoursesList = '[Courses] Update Courses List',
  SearchCourses = '[Courses] Search Courses',
  DeleteCourse = '[Courses] Delete Course',
  CreateCourse = '[Courses] Create Course',
  UpdateCourse = '[Courses] Update Course'
}

export class GetCourses implements Action {
  public readonly type = ECoursesActions.GetCourses;

  constructor(public payload: any) {
  }
}

export class UpdateCoursesList implements Action {
  public readonly type = ECoursesActions.UpdateCoursesList;

  constructor(public payload: any) {
  }
}

export class SearchCourses implements Action {
  public readonly type = ECoursesActions.SearchCourses;

  constructor(public payload: any) {
  }
}

export class DeleteCourse implements Action {
  public readonly type = ECoursesActions.DeleteCourse;

  constructor(public payload: any) {
  }
}

export class CreateCourse implements Action {
  public readonly type = ECoursesActions.CreateCourse;
  constructor(public payload: any) {
  }
}

export class UpdateCourse implements Action {
  public readonly type = ECoursesActions.UpdateCourse;
  constructor(public payload: any) {
  }
}

export type CoursesActions = GetCourses | UpdateCoursesList | SearchCourses | DeleteCourse | CreateCourse | UpdateCourse;
