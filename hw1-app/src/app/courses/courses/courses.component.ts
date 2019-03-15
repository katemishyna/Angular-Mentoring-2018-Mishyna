import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import {ICourse, Course} from '../models/course-item.model';
import {SearchPipe} from '../../shared/pipes/search.pipe';
import {CoursesService} from '../courses.service';
import {Subject} from 'rxjs';


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
  public searchTerm$ = new Subject<{start: number, count: number, textFragment: string}>();
  private start = 0;
  private count = 5;

  constructor(private coursesSvc: CoursesService,
              private router: Router,
              private ref: ChangeDetectorRef) {
    this.coursesSvc.search(this.searchTerm$)
      .subscribe(results => {
        this.courses = this.generateCourses(results);
        this.ref.markForCheck()
      });
  }

  ngOnInit() {
    this.initializeCourses();
  }

  public deleteCourse(course: ICourse) {
    if (course && course.id) {
      const deleteResult = this.coursesSvc.removeCourse(course, this.start, this.count);
      if (deleteResult !== undefined) {
        deleteResult.subscribe((data) => {
          this.courses = this.generateCourses(data);
          this.ref.markForCheck();
        });
      }

    }
  }

  public loadMoreClick() {
    this.start = this.start + 5;
    this.count = this.count + 5;
    this.initializeCourses();
  }

  public searchCourse(value: string) {
    if (value.length > 2) {
      this.searchTerm$.next({start: this.start, count: this.count, textFragment: value});
    }

    if (!value) {
      this.initializeCourses();
    }

  }

  public addCourse() {
    this.router.navigate(['/courses', 'new']);
  }

  private initializeCourses() {
    this.coursesSvc.getCourses(this.start, this.count).subscribe((data) => {
      this.courses = this.generateCourses(data);
      this.originalCourses = this.courses.map(item => item);
      this.ref.markForCheck();
    });
  }

  private generateCourses(data: any) {
    const courses: any[] = [];
    data.forEach((item: any, i: number) => {
      const d = new Date();
      const dayDiff = i % 2 === 0 ? (-i * 5) : i * 5;
      d.setDate(d.getDate() + dayDiff);
      const courseItem = {
        id: item.id,
        title: item.name,
        description: item.description,
        topRated: item.isTopRated,
        creationDate: d,
        date: item.date,
        duration: item.length,
        authors: item.authors
      };
      courses.push(new Course(courseItem));
    });
    return courses;
  }


}
