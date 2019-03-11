import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ICourse} from './models/course-item.model';
import {mergeMap} from 'rxjs/internal/operators';

const BASE_URL = 'http://localhost:3004';

@Injectable()
export class CoursesService {
  public courses: ICourse[] = [];

  constructor(private http: HttpClient) {
  }

  public getCourses(start: number, count: number, textFragment: string = '') {
    return this.http.get(`${BASE_URL}/courses`, {
      params: {
        start: start.toString(),
        count: count.toString(),
        textFragment
      }
    });
  }

  public createCourse(course: ICourse) {
    const courseData = {
      name: course.title || '',
      description: course.description || '',
      isTopRated: false,
      authors: course.authors,
      length: course.duration,
      date: course.date
    };
    return this.http.post(`${BASE_URL}/courses`, courseData);
  }

  public getCourseById(courseId: string) {
    return this.courses.find((item) => item.id === courseId);
  }

  public updateCourse(courseId: string, newCourse: ICourse) {
    const courseIndex = this.courses.findIndex((item) => item.id === courseId);
    Object.assign(this.courses[courseIndex], newCourse);
  }

  public removeCourse(course: ICourse, start: number, count: number) {
    const r = confirm('Do you really want to delete this course?');
    if (r === true && course && course.id) {
      return this.http.delete(`${BASE_URL}/courses/${course.id}`).pipe(
        mergeMap(() => this.getCourses(start, count))
      );
    }
  }
}
