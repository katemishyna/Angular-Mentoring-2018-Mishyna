import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchComponent implements OnInit {
  public searchStr = '';
  @Output() searchCourse = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  public search() {
      this.searchCourse.emit(this.searchStr);
  }
}
