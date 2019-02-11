import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {ICourse} from '../models/course-item.model';
import {SearchPipe} from '../../shared/pipes/search.pipe';
import {CoursesService} from '../courses.service';


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

  constructor(private search: SearchPipe,
              private coursesSvc: CoursesService,
              private router: Router) {
  }

  ngOnInit() {
    this.initializeCourses();
  }

  public deleteCourse(course: ICourse) {
    this.coursesSvc.removeCourse(course);
    this.courses = this.coursesSvc.getCourses();
  }

  public loadMoreClick() {
    console.log('Load More Handler');
  }

  public searchCourse(value: string) {
    this.courses = this.search.transform(this.originalCourses, 'title', value);
  }

  public addCourse() {
    this.router.navigate(['/new']);
  }

  private initializeCourses() {
    this.courses = this.coursesSvc.getCourses();
    this.originalCourses = this.courses.map(item => item);
  }


}
