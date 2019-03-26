import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {map, switchMap, catchError, tap} from 'rxjs/internal/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {CoursesService} from '../../courses/courses.service';
import {
  ECoursesActions, UpdateCoursesList, GetCourses, DeleteCourse, CreateCourse,
  UpdateCourse
} from '../actions/courses.actions';
import {ICoursePayload} from "../../courses/models/course-item.model";

@Injectable()
export class CoursesEffects {
  constructor(private coursesService: CoursesService,
              private actions$: Actions,
              private router: Router) {
  }

  @Effect()
  $getCourses = this.actions$.pipe(
    ofType(ECoursesActions.GetCourses),
    map((action: GetCourses) => action.payload),
    switchMap(payload => {
      return this.coursesService.getCourses(payload.start, payload.count)
        .pipe(
          map((coursesData: ICoursePayload[]) => {
            const courses = this.coursesService.generateCourses(coursesData);
            return new UpdateCoursesList(courses);
          })
        )
    })
  );

  @Effect()
  $deleteCourse = this.actions$.pipe(
    ofType(ECoursesActions.DeleteCourse),
    map((action: DeleteCourse) => action.payload),
    switchMap(payload => {
      return this.coursesService.removeCourse(payload.courseId, payload.start, payload.count)
        .pipe(
          map((coursesData: any) => {
            const courses = this.coursesService.generateCourses(coursesData);
            return new UpdateCoursesList(courses);
          })
        )
    })
  );

  @Effect(({dispatch: false}))
  $createCourse = this.actions$.pipe(
    ofType(ECoursesActions.CreateCourse),
    map((action: CreateCourse) => action.payload),
    switchMap(payload => {
      return this.coursesService.createCourse(payload)
        .pipe(
          map(() => {
            this.router.navigate(['courses']);
          }),
          catchError((error: any) => {
            alert(error);
            return of();
          })
        )
    })
  );

  @Effect(({dispatch: false}))
  $updateCourse = this.actions$.pipe(
    ofType(ECoursesActions.UpdateCourse),
    map((action: UpdateCourse) => action.payload),
    switchMap(payload => {
      return this.coursesService.updateCourse(payload)
        .pipe(
          map(() => {
            this.router.navigate(['courses']);
          }),
          catchError((error: any) => {
            alert(error);
            return of();
          })
        )
    })
  );

}


