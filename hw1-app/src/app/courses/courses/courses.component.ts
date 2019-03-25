import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {ICourse, Course} from '../models/course-item.model';
import {SearchPipe} from '../../shared/pipes/search.pipe';
import {CoursesService} from '../courses.service';
import {Subject} from 'rxjs';
import {IAppState} from '../../store/states/index';
import {Store, select} from '@ngrx/store';
import {GetCourses, DeleteCourse} from '../../store/actions/courses.actions';
import {selectCoursesList} from '../../store/selectors/courses.selectors';
import {takeUntil} from 'rxjs/internal/operators';


@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SearchPipe]
})

export class CoursesComponent implements OnInit, OnDestroy {
  public courses: ICourse[] = [];
  public searchTerm$ = new Subject<{start: number, count: number, textFragment: string}>();
  public coursesList$ = this.store.pipe(select(selectCoursesList));
  private unsubscribe: Subject<any> = new Subject();
  private start = 0;
  private count = 5;

  constructor(private coursesSvc: CoursesService,
              private router: Router,
              private ref: ChangeDetectorRef,
              private store: Store<IAppState>) {
    this.coursesSvc.search(this.searchTerm$)
      .pipe(takeUntil(this.unsubscribe)).subscribe(results => {
        this.courses = this.coursesSvc.generateCourses(results);
        this.ref.markForCheck()
      });
  }

  ngOnInit() {
    this.subscribeOnCoursesChange();
    this.store.dispatch(new GetCourses({start: this.start, count: this.count}));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public deleteCourse(course: ICourse) {
    const r = confirm('Do you really want to delete this course?');
    if (r === true && course.id) {
      this.store.dispatch(new DeleteCourse({courseId: course.id, start: this.start, count: this.count}))
    }
  }


  public loadMoreClick() {
    this.start = this.start + 5;
    this.count = this.count + 5;
    this.store.dispatch(new GetCourses({start: this.start, count: this.count}));
  }

  public searchCourse(value: string) {
    if (value.length > 2) {
      this.searchTerm$.next({start: this.start, count: this.count, textFragment: value});
    }

    if (!value) {
      this.store.dispatch(new GetCourses({start: this.start, count: this.count}));
    }

  }

  public addCourse() {
    this.router.navigate(['/courses', 'new']);
  }

  private subscribeOnCoursesChange() {
    this.coursesList$.pipe(takeUntil(this.unsubscribe)).subscribe((courses: any) => {
      this.courses = courses;
      this.ref.markForCheck();
    })
  }
}
