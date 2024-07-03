import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MyServiceService } from './my-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyResolverService implements Resolve<any>{

  constructor(private myservice: MyServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
         return this.myservice.getToDoList();
  }
}
