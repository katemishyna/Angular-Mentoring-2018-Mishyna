import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ICourse, Course } from '../models/course-item.model';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
  public item: ICourse = new Course({
    id: 'id',
    title: 'title',
    creationDate: new Date(),
    duration: 33,
    description: 'description'
  });

  constructor() {
  }

  ngOnInit() {
  }

}
