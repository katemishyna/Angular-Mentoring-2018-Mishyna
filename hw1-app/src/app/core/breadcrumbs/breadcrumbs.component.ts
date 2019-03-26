import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter} from 'rxjs/operators';
import {AuthService} from '../auth.service';
import {CoursesService} from '../../courses/courses.service';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: any[] = [];

  constructor(private authSvc: AuthService,
              private router: Router,
              private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged())
      .subscribe((data: any) => {
        this.breadcrumbs = [];
        this.getBreadcrumbs(data);
      });
  }

  public isAuth() {
    return this.authSvc.isAuth();
  }

  private getBreadcrumbs(data: any) {
    // const currentFullUrl = data.urlAfterRedirects;
    // const urls = currentFullUrl.split('/').filter((url: string) => !!url);
    // if (urls[0] && urls[0] === 'courses') {
    //   urls.forEach((url: any, index: number) => {
    //     let label = '';
    //     if (index === 0) {
    //       label = 'Courses';
    //     } else if (index === 1) {
    //       const currentCourse = url && this.coursesService.getCourseById(url);
    //       if (currentCourse) {
    //         label = currentCourse.title;
    //       } else if (url.toLocaleLowerCase() === 'new') {
    //         label = 'New Course'
    //       }
    //     }
    //     const breadcrumbItem = {
    //       url: urls.slice(0, index + 1),
    //       label
    //     };
    //     this.breadcrumbs.push(breadcrumbItem);
    //   });
    // }
  }

}
