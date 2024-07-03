import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './core/my-component/my-component.component';
import { TestLogicsComponent } from './core/test-logics/test-logics.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { MyInterceptorService } from './services/my-interceptor.service';
import { CreatePostComponent } from './core/create-post/create-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Practice1Component } from './core/practice1/practice1.component';
import { PracticeFormComponent } from './core/practice-form/practice-form.component';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { PracticeResoverComponent } from './core/practice-resover/practice-resover.component';
import { HighlightDirective } from './directives/highlight.directive';
import { LoginComponent } from './core/login/login.component';
import { ToCheckCanDeactivateGuardComponent } from './core/to-check-can-deactivate-guard/to-check-can-deactivate-guard.component';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { Practice2Component } from './core/practice2/practice2.component';
import { Practice3Component } from './core/practice3/practice3.component';
import { Practice4Component } from './core/practice4/practice4.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TestLogicsComponent,
    CustomPipePipe,
    CreatePostComponent,
    Practice1Component,
    PracticeFormComponent,
    MultiplyPipe,
    PracticeResoverComponent,
    HighlightDirective,
    LoginComponent,
    ToCheckCanDeactivateGuardComponent,
    ProgressBarComponent,
    Practice2Component,
    Practice3Component,
    Practice4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
   
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
