import {Component, OnInit} from '@angular/core';
import {IUser} from '../models/user.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: IUser = {Id: 'Id', FirstName: 'Kate', LastName: 'Mishyna'};

  constructor() {
  }

  ngOnInit() {
  }

}
