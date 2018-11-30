import {NgModule} from '@angular/core';
import { SearchComponent } from './search/search.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [],
  declarations: [SearchComponent, LogoComponent],
  exports: [SearchComponent, LogoComponent]
})
export class SharedModule {
}
