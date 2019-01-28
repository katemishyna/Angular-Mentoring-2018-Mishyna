import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';
import {TermHighlighterDirective} from './directives/term-highlighter.directive';
import {DurationPipe} from './pipes/duration.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';
import {SearchPipe} from './pipes/search.pipe';

@NgModule({
  imports: [FormsModule],
  declarations: [
    SearchComponent,
    TermHighlighterDirective,
    DurationPipe,
    OrderByPipe,
    SearchPipe
  ],
  exports: [
    SearchComponent,
    TermHighlighterDirective,
    DurationPipe,
    OrderByPipe,
    SearchPipe
  ],
})
export class SharedModule {
}
