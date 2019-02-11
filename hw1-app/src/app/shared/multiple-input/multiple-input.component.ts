import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'multiple-input',
  templateUrl: './multiple-input.component.html',
  styleUrls: ['./multiple-input.component.scss']
})
export class MultipleInputComponent implements OnInit {

  @Input() items: string = '';
  @Output() itemsChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  public onItemsChange(newItems: string) {
    this.items = newItems;
    this.itemsChange.emit(this.items);
  }

}
