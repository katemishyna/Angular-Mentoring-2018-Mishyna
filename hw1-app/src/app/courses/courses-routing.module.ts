import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {CoursePageComponent} from './course-page/course-page.component';
import {CanActivateAuthGuard} from './guards/auth.guard';

const coursesRoutes: Routes = [
    {path: 'courses', component: CoursesComponent, canActivate: [CanActivateAuthGuard]},
    {path: 'courses/new', component: CoursePageComponent, canActivate: [CanActivateAuthGuard], data: {isNew: true}},
    {path: 'courses/:id', component: CoursePageComponent, canActivate: [CanActivateAuthGuard], data: {isNew: false}}
  ]
  ;

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule],
  providers: [CanActivateAuthGuard]
})
export class CoursesRoutingModule {
}
