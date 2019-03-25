import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ICourse, Course} from '../models/course-item.model';
import {CoursesService} from '../courses.service';
import {IAppState} from '../../store/states/index';
import {Store} from '@ngrx/store';
import {CreateCourse, UpdateCourse} from '../../store/actions/courses.actions';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/internal/operators';

@Component({
  selector: 'course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnDestroy {

  public course: ICourse = new Course();
  private unsubscribe: Subject<any> = new Subject();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService,
              private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.initCourse();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public save() {
    if (!this.course.id) {
      this.store.dispatch(new CreateCourse(this.course));
    } else {
      this.store.dispatch(new UpdateCourse(this.course));
    }
  }

  public cancel() {
    this.router.navigate(['/courses']);
  }

  private initCourse() {
    const id: string = this.activatedRoute.snapshot.params.id;
    const isNew = this.activatedRoute.snapshot.data.isNew;
    if (!isNew && id) {
      this.coursesService.getCourseById(id).pipe(takeUntil(this.unsubscribe)).subscribe((courseData) => {
        this.course = this.coursesService.generateOneCourse(courseData);
      });
    }
  }

}
