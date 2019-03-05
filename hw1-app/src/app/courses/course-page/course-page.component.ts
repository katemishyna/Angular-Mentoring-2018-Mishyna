import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ICourse, Course} from '../models/course-item.model';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  public course: ICourse = new Course();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.initCourse();
  }

  public save() {
    // update API doesn't work for now
    // this.coursesService.updateCourse(this.course.id, this.course);
    if (!this.course.id) {
      this.coursesService.createCourse(this.course)
        .subscribe(() => {
            this.router.navigate(['/courses']);
          },
          (error) => alert(error));
    }
  }

  public cancel() {
    this.router.navigate(['/courses']);
  }

  private initCourse() {
    const id: string = this.activatedRoute.snapshot.params.id;
    const isNew = this.activatedRoute.snapshot.data.isNew;
    const currentCourse = id && this.coursesService.getCourseById(id);
    if (currentCourse) {
      this.course = new Course(currentCourse);
    } else if (!isNew) {
      this.router.navigate(['/page-not-found']);
    }
  }

}
