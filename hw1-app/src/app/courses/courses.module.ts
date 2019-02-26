import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CoursesComponent} from './courses/courses.component';
import {CourseItemComponent} from './course-item/course-item.component';
import {SharedModule} from '../shared/shared.module';
import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesService} from './courses.service';
import {CoursePageComponent} from './course-page/course-page.component';


@NgModule({
  imports: [CommonModule, SharedModule, CoursesRoutingModule, FormsModule],
  providers: [CoursesService],
  declarations: [CoursesComponent, CourseItemComponent, CoursePageComponent],
  exports: [CoursesComponent, CourseItemComponent],
})
export class CoursesModule {
}
