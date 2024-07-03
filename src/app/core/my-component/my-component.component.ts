import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { MyServiceService } from 'src/app/services/my-service.service';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent  implements OnInit,CanComponentDeactivate  {
  observable: Observable<string>;
  subscription: Subscription;
  // @Input() message: string;
  msg: any;
  data: string;
  

 formData='';

 originalFormData=this.formData;
  constructor(private router: Router,private myService: MyServiceService) {

  
  }
 

  ngOnInit(): void {
    // this.observable = new Observable((obsever: any) => {
    //   obsever.next('first value');

    //   setTimeout(() => {
    //     obsever.next('seconde value');
    //     obsever.complete();
    //   }, 2000);
    // });
    // this.subscription = this.observable.subscribe((data: any) => {
    //   console.log(data);
    //   this.msg=data;

    // });

    // this.myService.getData().subscribe((res)=>{
    //   this.data=  res;
    // })
  }
  // ngOnDestroy(): void {
  //   console.log('ng destroy called');
  //   if(this.subscription){
  //     this.subscription.unsubscribe();
  //   }
  // }

  gotoTestLogicComp(){
  this.router.navigate(['/gotoTestLogicComponent']);

  }


  // Simulate making changes in the form
  makeChanges() {
    this.originalFormData = this.formData;
    
    console.log('Changes made:', this.originalFormData);
  }


  //if you navigate to other page after some change and without call this method then only confirmation popup will come.
  // This method is called by CanDeactivateGuard
  canDeactivate(): boolean {
    console.log('hiiii');
    console.log(this.formData);
    console.log(this.originalFormData);
    if (this.formData !== this.originalFormData) {
      console.log('object');
      return window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }


}

