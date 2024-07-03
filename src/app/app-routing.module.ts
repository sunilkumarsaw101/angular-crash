import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentComponent } from './core/my-component/my-component.component';
import { TestLogicsComponent } from './core/test-logics/test-logics.component';
import { CreatePostComponent } from './core/create-post/create-post.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { Practice1Component } from './core/practice1/practice1.component';
import { PracticeFormComponent } from './core/practice-form/practice-form.component';
import { PracticeResoverComponent } from './core/practice-resover/practice-resover.component';
import { MyResolverService } from './services/my-resolver.service';
import { LoginComponent } from './core/login/login.component';
import { ToCheckCanDeactivateGuardComponent } from './core/to-check-can-deactivate-guard/to-check-can-deactivate-guard.component';
import { CustomCanDeactivateGuardGuard } from './guards/custom-can-deactivate-guard.guard';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { Practice2Component } from './core/practice2/practice2.component';
import { Practice3Component } from './core/practice3/practice3.component';
import { Practice4Component } from './core/practice4/practice4.component';


const routes: Routes = [
  //landing default page.

  {
    path: '',
    redirectTo: 'gotoTestLogicComponent',
    pathMatch: 'full',
  },

  {
    path: 'gotoprogress',
    component: ProgressBarComponent
  },

  {
    path: 'practiceResolver',
    component: PracticeResoverComponent,
    resolve: {
      resolveData: MyResolverService,
    },
  },
  { path: 'gotoTestLogicComponent', component: TestLogicsComponent },

  // {path: 'gotoMyComponent', component: MyComponentComponent},
  // {path: 'gotoTestLogicComponent', component: TestLogicsComponent, outlet: 'testLogic'},
  { path: 'createPost', component: CreatePostComponent },
  {
    path: 'practice1',
    component: Practice1Component,
  },
  {
    path: 'practice3', component: Practice3Component
  },
  {
    path:'practice4', component: Practice4Component
  },
  {
    path: 'practiceForm',
    component: PracticeFormComponent,
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazy/lazy.module').then((m) => m.LazyModule),
  },

  // {
  //   path: 'gotoMyComponent',
  //   component: MyComponentComponent,
  //   canDeactivate: [CanDeactivateGuard],
  //   outlet: 'myComponent'
  // },
  {
    path: 'gotoMyComponent',
    component: MyComponentComponent,
    canDeactivate: [CanDeactivateGuard],

    // outlet: 'myComponent'//used to create named router outlet.
  },
  {
    path: 'goToCheckCanDeactivateGuard',
    component: ToCheckCanDeactivateGuardComponent,
    canDeactivate: [CustomCanDeactivateGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
