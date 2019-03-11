import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loaderSubject = new Subject<boolean>();

  constructor() {
  }

  public show() {
    this.loaderSubject.next(true);
  }

  public hide() {
    this.loaderSubject.next(false);
  }
}
