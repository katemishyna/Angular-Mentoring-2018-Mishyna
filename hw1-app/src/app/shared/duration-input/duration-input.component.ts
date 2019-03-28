import {Component, OnInit, Input, Output, EventEmitter, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

const DURATION_INPUT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DurationInputComponent),
  multi: true
};

@Component({
  selector: 'duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
  providers: [DURATION_INPUT_VALUE_ACCESSOR]
})
export class DurationInputComponent implements ControlValueAccessor {

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
