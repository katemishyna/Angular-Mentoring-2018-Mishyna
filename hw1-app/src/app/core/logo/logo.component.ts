import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}