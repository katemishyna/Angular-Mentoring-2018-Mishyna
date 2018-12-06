import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IUser, User } from '../models/user.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public user: IUser = new User({ id: 'Id', firstName: 'Kate', lastName: 'Mishyna' });

  constructor() {
  }

  ngOnInit() {
  }

}
