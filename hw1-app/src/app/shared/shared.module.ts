import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SearchComponent} from './search/search.component';
import {TermHighlighterDirective} from './directives/term-highlighter.directive';
import {DurationPipe} from './pipes/duration.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';
import {SearchPipe} from './pipes/search.pipe';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { MultipleInputComponent } from './multiple-input/multiple-input.component';

@NgModule({
  imports: [FormsModule],
  declarations: [
    SearchComponent,
    TermHighlighterDirective,
    DurationPipe,
    OrderByPipe,
    SearchPipe,
    DatePickerComponent,
    DurationInputComponent,
    MultipleInputComponent
  ],
  exports: [
    SearchComponent,
    TermHighlighterDirective,
    DurationPipe,
    OrderByPipe,
    SearchPipe,
    DatePickerComponent,
    DurationInputComponent,
    MultipleInputComponent
  ],
})
export class SharedModule {
}
