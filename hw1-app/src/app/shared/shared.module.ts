import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [FormsModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SharedModule {
}
