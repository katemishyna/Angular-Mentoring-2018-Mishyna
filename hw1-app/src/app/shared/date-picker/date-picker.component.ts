import {Component, OnInit, EventEmitter, Input, Output, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS} from "@angular/forms";

const DATE_PICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true
};

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [DATE_PICKER_VALUE_ACCESSOR]
})
export class DatePickerComponent implements ControlValueAccessor {
  @Input() public error: boolean = false;
  public currentValue: string = '';

  public set value(newValue: string) {
    this.currentValue = newValue;
    this.onChange(newValue);

  }

  public get value() {
    return this.currentValue;
  }

  public onChange = (value: any) => {
    // onChange;
  }
  public onTouched = (value: any) => {
    // onTouched
  }

  public writeValue(value: any): void {
    if (value !== this.currentValue) {
      this.currentValue = value;
    }
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
