import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ICourse, Course} from '../models/course-item.model';
import {CoursesService} from '../courses.service';
import {IAppState} from '../../store/states/index';
import {Store} from '@ngrx/store';
import {CreateCourse, UpdateCourse} from '../../store/actions/courses.actions';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/internal/operators';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnDestroy {

  public course: ICourse = new Course();
  private unsubscribe: Subject<void> = new Subject();
  public coursePageForm: FormGroup;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService,
              private formBuilder: FormBuilder,
              private store: Store<IAppState>) {
    this.coursePageForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', Validators.compose([
        Validators.required, this.checkDate])],
      duration: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.initCourse();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  get f() {
    return this.coursePageForm.controls;
  }

  public saveOrUpdate() {
    this.course = {...this.course, ...this.coursePageForm.value};
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
        this.parseCourseModelToForm();
      });
    }
  }

  private generateDate(date: any) {
      const dateObj = date ? new Date(date) : new Date();
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
    return day + "/" + month + "/" + year;
  }

  private parseCourseModelToForm() {
    this.coursePageForm.controls['title'].setValue(this.course.title);
    this.coursePageForm.controls['description'].setValue(this.course.description);
    this.coursePageForm.controls['date'].setValue(this.generateDate(this.course.date));
    this.coursePageForm.controls['duration'].setValue(this.course.duration);
  }

  private checkDate(fieldControl: FormControl) {
    function testDate(str: string): boolean {
      const t = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
      if (t === null) {
        return false;
      }
      const d = +t[1];
      const m = +t[2];
      const y = +t[3];
      if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
        return true;
      }
      return false;
    }

    return (fieldControl.value && testDate(fieldControl.value)) ? null : {dateFormat: true};
  }

  test() {
    console.log(this.coursePageForm);
  }


}
