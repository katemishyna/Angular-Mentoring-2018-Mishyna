import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ICourse, Course} from '../models/course-item.model';
import {SearchPipe} from '../../shared/pipes/search.pipe';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SearchPipe]
})
export class CoursesComponent implements OnInit {
  public courses: ICourse[] = [];
  public originalCourses: ICourse[] = [];

  constructor(private search: SearchPipe) {
  }

  ngOnInit() {
    this.initializeCourses();
  }

  public deleteCourse(course: ICourse) {
    const courseIndex = this.courses.findIndex((item) => item.id === course.id);
    if (courseIndex !== -1) {
      this.courses.splice(courseIndex, 1);
    }
  }

  public loadMoreClick() {
    console.log('Load More Handler');
  }

  public searchCourse(value: string) {
    this.courses = this.search.transform(this.originalCourses, 'title', value);
  }

  private initializeCourses() {
    for (let i = 1; i < 5; i++) {
      let d = new Date();
      let dayDiff = i % 2 === 0 ? (-i * 5) : i * 5;
      d.setDate(d.getDate() + dayDiff);
      this.courses.push(new Course({
        id: `id${i}`,
        title: `Video Course ${i}`,
        creationDate: d,
        duration: 33 * i,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit` +
        `sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim`
        + `veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea `,
        topRated: i % 2 === 0
      }));
      this.originalCourses = this.courses.map(item => item);
    }
  }
}
