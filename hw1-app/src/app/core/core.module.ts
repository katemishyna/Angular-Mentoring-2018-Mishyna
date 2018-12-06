import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './logo/logo.component';
import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [SharedModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
