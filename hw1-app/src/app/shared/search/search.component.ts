import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SearchComponent implements OnInit {
  public searchStr = '';

  constructor() {
  }

  ngOnInit() {
  }

  public search() {
    console.log(this.searchStr);
  }
}
