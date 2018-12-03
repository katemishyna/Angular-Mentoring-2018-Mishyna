import {Component, OnInit} from '@angular/core';
import {ICourse} from '../models/course-item.model';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  public item: ICourse = {
    Id: 'id',
    Title: 'title',
    CreationDate: new Date(),
    Duration: 33,
    Description: 'description'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
