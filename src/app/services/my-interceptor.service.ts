import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
//   {
//   providedIn: 'root'
// }
export class MyInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({
      setHeaders: {
        'X-custom-header': 'myCustomValue',
      },
    });

    return next.handle(modifiedRequest);
  }
}
