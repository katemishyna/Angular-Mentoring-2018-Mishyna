import { Component,
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
  OnDestroy } from '@angular/core';
import { ICourse } from '../models/course-item.model';

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
  @Input() item: any = {};
  @Output() deleteCourse: EventEmitter<ICourse> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit hook')
  }

  ngOnChanges() {
    console.log('ngOnChanges hook')
  }

  ngDoCheck() {
    console.log('ngDoCheck hook')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit hook')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked hook')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit hook')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked hook')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy hook')
  }


  onDeleteCourseClick() {
    console.log('delete');
    this.deleteCourse.emit(this.item);
  }

}
