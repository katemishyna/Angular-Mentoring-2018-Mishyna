import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {

  @Input() duration: number = 0;
  @Output() durationChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public onDurationChange(newDuration: number) {
    this.duration = newDuration;
    this.durationChange.emit(this.duration);
  }

}
