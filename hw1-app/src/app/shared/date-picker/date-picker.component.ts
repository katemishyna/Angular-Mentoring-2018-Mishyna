import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input() date: string = '';
  @Output() dateChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onDateChange(newDate: string) {
    this.date = newDate;
    this.dateChange.emit(this.date);
  }
}
