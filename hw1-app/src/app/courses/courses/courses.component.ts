import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
