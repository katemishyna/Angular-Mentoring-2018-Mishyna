import {Injectable} from '@angular/core';
import {ICourse, Course} from './models/course-item.model';

@Injectable()
export class CoursesService {
  public courses: ICourse[] = [];

  constructor() {
    this.initializeCourses();
  }

  public getCourses() {
    return this.courses;
  }

  public createCourse(courseData: ICourse) {
    this.courses.push(new Course(courseData));
  }

  public getCourseById(courseId: string) {
    return this.courses.find((item) => item.id === courseId);
  }

  public updateCourse(courseId: string, newCourse: ICourse) {
    const courseIndex = this.courses.findIndex((item) => item.id === courseId);
    Object.assign(this.courses[courseIndex], newCourse);
  }

  public removeCourse(course: ICourse) {
    const r = confirm('Do you really want to delete this course?');
    if (r === true) {
      const courseIndex = this.courses.findIndex((item) => item.id === course.id);
      if (courseIndex !== -1) {
        this.courses.splice(courseIndex, 1);
      }
    }
  }

  private initializeCourses() {
    for (let i = 1; i < 5; i++) {
      const d = new Date();
      const dayDiff = i % 2 === 0 ? (-i * 5) : i * 5;
      d.setDate(d.getDate() + dayDiff);
      this.courses.push(new Course({
        id: `id${i}`,
        title: `Video Course ${i}`,
        creationDate: d,
        duration: 33 * i,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit` +
        `sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim`
        + `veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea `,
        topRated: i % 2 === 0,
        authors: `Author${i}`,
        date: d
      }));
    }
  }
}
