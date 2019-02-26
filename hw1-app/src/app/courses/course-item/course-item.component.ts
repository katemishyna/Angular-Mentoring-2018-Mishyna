import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import {Router} from '@angular/router';
import {ICourse, Course} from '../models/course-item.model';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input() courseItem: ICourse = new Course();
  @Output() deleteCourse = new EventEmitter<ICourse>();

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('ngOnInit hook');
  }

  ngOnChanges() {
    console.log('ngOnChanges hook');
  }

  ngDoCheck() {
    console.log('ngDoCheck hook');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit hook');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked hook');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit hook');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked hook');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy hook');
  }


  onDeleteCourseClick() {
    this.deleteCourse.emit(this.courseItem);
  }

  editCourse(id: string) {
    this.router.navigate(['/courses', `${id}`]);
  }

}
