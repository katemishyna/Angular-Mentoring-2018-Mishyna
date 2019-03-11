import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {Subscription, Subject} from 'rxjs';
import {LoaderService} from '../loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements OnInit {
  public show: Subject<boolean> = new Subject();

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.show = this.loaderService.loaderSubject;
  }
}
