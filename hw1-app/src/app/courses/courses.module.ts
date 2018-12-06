import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CoursesComponent, CourseItemComponent],
  exports: [CoursesComponent, CourseItemComponent],
})
export class CoursesModule {
}
