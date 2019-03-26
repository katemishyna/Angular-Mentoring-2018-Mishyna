import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ICourse, Course, ICoursePayload} from './models/course-item.model';
import {mergeMap, distinctUntilChanged, switchMap, debounceTime, map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';

const BASE_URL = 'http://localhost:3004';

@Injectable()
export class CoursesService {
  public courses: ICourse[] = [];

  constructor(private http: HttpClient) {
  }

  public getCourses(start: number, count: number, textFragment: string = ''): Observable<ICoursePayload[]> {
    return this.http.get<ICoursePayload[]>(`${BASE_URL}/courses`, {
      params: {
        start: start.toString(),
        count: count.toString(),
        textFragment
      }
    });
  }

  public search(searchTerm: Observable<{start: number, count: number, textFragment: string}>): Observable<ICoursePayload[]> {
    return searchTerm
      .pipe(debounceTime(1000),
        distinctUntilChanged(),
        switchMap(searchTerm => this.getCourses(searchTerm.start, searchTerm.count, searchTerm.textFragment))
      )
  }

  public createCourse(course: ICourse) {
    const courseData = this.toPayloadCourseData(course);
    return this.http.post(`${BASE_URL}/courses`, courseData);
  }

  public getCourseById(courseId: string) {
    return this.http.get(`${BASE_URL}/courses/${courseId}`);
  }

  public updateCourse(course: ICourse) {
    const courseData = this.toPayloadCourseData(course);
    return this.http.put(`${BASE_URL}/courses/${course.id}`, courseData);
  }

  public removeCourse(courseId: string, start: number, count: number) {
    return this.http.delete(`${BASE_URL}/courses/${courseId}`).pipe(
      mergeMap(() => this.getCourses(start, count))
    );
  }

  public generateCourses(data: ICoursePayload[]) {
    return data.map((item: any, i: number) => {
      const courseItem = this.generateOneCourse(item, i);
      return new Course(courseItem);
    });
  }

  public generateOneCourse(courseData: any, i = 0) {
    const d = new Date();
    const dayDiff = i % 2 === 0 ? (-i * 5) : i * 5;
    d.setDate(d.getDate() + dayDiff);
    return {
      id: courseData.id,
      title: courseData.name,
      description: courseData.description,
      topRated: courseData.isTopRated,
      creationDate: d,
      date: courseData.date,
      duration: courseData.length,
      authors: courseData.authors
    };
  }

  private toPayloadCourseData(course: ICourse) {
    return {
      name: course.title || '',
      description: course.description || '',
      isTopRated: false,
      authors: course.authors,
      length: course.duration,
      date: course.date
    };
  }
}
