import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesComponent} from './courses/courses.component';
import {CourseItemComponent} from './course-item/course-item.component';
import {SharedModule} from '../shared/shared.module';
import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesService} from './courses.service';

@NgModule({
  imports: [CommonModule, SharedModule, CoursesRoutingModule],
  providers: [CoursesService],
  declarations: [CoursesComponent, CourseItemComponent],
  exports: [CoursesComponent, CourseItemComponent],
})
export class CoursesModule {
}
