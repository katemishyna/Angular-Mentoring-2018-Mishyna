import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {CoursesModule} from './courses/courses.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    CoursesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
