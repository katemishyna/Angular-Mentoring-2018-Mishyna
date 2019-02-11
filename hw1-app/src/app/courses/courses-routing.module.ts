import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {AddCourseComponent} from './add-course/add-course.component';

const coursesRoutes: Routes = [
    {path: 'courses', component: CoursesComponent},
    {path: 'new', component: AddCourseComponent},
  ]
  ;

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
