import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private authSvc: AuthService) {
  }

  ngOnInit() {
  }

  public isAuth() {
    return this.authSvc.isAuth();
  }

}
