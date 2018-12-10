import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ICourse, Course} from "../models/course-item.model";

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {
  public courses: ICourse[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.courses.push(new Course({
        id: `id${i}`,
        title: `Video Course ${i}`,
        creationDate: new Date(2011, 0, 1),
        duration: 33,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`+
        `sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim`
        +`veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea `
      }));
    }
  }

  public deleteCourse(course: ICourse) {
    const courseIndex = this.courses.findIndex((item) => {
      return item.id === course.id;
    });
    if (courseIndex !== -1) {
      this.courses.splice(courseIndex, 1);
    }
  }

  public onLoadMoreClick() {
    console.log('Load More Handler');
  }

}
