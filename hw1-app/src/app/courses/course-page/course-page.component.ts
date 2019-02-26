import {Component, OnInit} from '@angular/core';
import {ICourse, Course} from '../models/course-item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  public course: ICourse = new Course();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public save() {
    console.log(this.course);
  }

  public cancel() {
    this.router.navigate(['/courses']);
  }

}
