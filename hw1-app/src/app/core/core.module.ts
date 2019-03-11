import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {LogoComponent} from './logo/logo.component';
import {SharedModule} from '../shared/shared.module';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {AuthService} from './auth.service';
import {LoginPageComponent} from './login-page/login-page.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {RouterModule} from '@angular/router';
import {TokenInterceptor} from './token.interceptor';
import {HttpListener} from './http.interceptor';
import {LoaderComponent} from './loader/loader.component';
import {LoaderService} from './loader.service';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule],
  providers: [AuthService, LoaderService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
    AuthService, {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpListener,
      multi: true
    }],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    LoaderComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    LoginPageComponent,
    LoaderComponent]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
