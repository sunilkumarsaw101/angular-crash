import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ToCheckCanDeactivateGuardComponent } from '../core/to-check-can-deactivate-guard/to-check-can-deactivate-guard.component';

@Injectable({
  providedIn: 'root',
})
export class CustomCanDeactivateGuardGuard
  implements CanDeactivate<ToCheckCanDeactivateGuardComponent>
{
  canDeactivate(
    component: ToCheckCanDeactivateGuardComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      if(component.hasUnsave()){
        return confirm('Are you sure, You want to leave? You have unsaved changes');
      }
    return true;
  }
}
