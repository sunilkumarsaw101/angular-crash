import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';
import { ServieToCheckSingletonService } from 'src/app/services/servie-to-check-singleton.service';



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LazyComponent }, // Add a route for LazyComponent
    ]),
  ],
  providers: [ServieToCheckSingletonService]
})
export class LazyModule { }
