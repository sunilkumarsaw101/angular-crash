import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
// export class MyInterceptorService implements HttpInterceptor{

//   constructor() {}

//   intercept(
//   request: HttpRequest<any>,
//   next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//   // You can modify the request here, e.g., add headers, authentication tokens, etc.
//   console.log('object');
//   const modifiedRequest = request.clone({
//     headers: request.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE'),
//   });

//   // Pass the modified request to the next handler
//   return next.handle(modifiedRequest);
//   }
  
// }


export class MyInterceptorService implements HttpInterceptor {
  constructor() {}

    intercept(
    request: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
    // You can modify the request here, e.g., add headers, authentication tokens, etc.
    
    const modifiedRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE'),
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
    }
  }
