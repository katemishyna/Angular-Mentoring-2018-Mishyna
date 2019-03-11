import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/internal/observable';
import {tap} from 'rxjs/internal/operators';
import {LoaderService} from './loader.service';


@Injectable()
export class HttpListener implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loaderService.hide();
        }
      },
      (err: any) => {
        this.loaderService.hide();
      }));
  }
}
