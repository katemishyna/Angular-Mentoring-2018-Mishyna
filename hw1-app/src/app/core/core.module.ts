import {NgModule, Optional, SkipSelf} from '@angular/core';
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

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule],
  providers: [AuthService],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    LoginPageComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    LoginPageComponent]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
