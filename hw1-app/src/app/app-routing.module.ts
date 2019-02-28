import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './core/login-page/login-page.component';
import {NotFoundPageComponent} from './core/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'page-not-found', component: NotFoundPageComponent},
  {path: '**', redirectTo: '/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
