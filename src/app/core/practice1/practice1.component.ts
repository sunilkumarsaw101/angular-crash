import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

import { Observable, from, fromEvent, interval, merge, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css'],
})
export class Practice1Component implements OnInit {
  // myObservable: Observable<unknown>;
  // originalVal = 6;
  // data: any=[];

  // data: any= this.myservice.getValue();

  // mergeValue:any=[];

  // studObj = new Student();
  // teachObj = new Teacher();

  constructor(
    private myservice: MyServiceService // private myService: MyServiceService,
  ) {
    //..........to undestand the merge operator...........
    // const obj1= new Observable((obser:any)=>{
    //   setTimeout(() => {
    //     obser.next('value 1 added');
    //   }, 1000);
    // });
    // const obj2= new Observable((obser:any)=>{
    //   setTimeout(() => {
    //     obser.next('value 2 added');
    //   }, 2000);
    // });
    // const mergedObservable$= merge(obj1, obj2);
    // mergedObservable$.subscribe((value:any)=>{
    //   this.mergeValue.push(value) ;
    // })
    // console.log(
    //   'student add: ',
    //   this.studObj.getAdd(),
    //   'teacher add: ',
    //   this.teachObj.getAdd()
    // );
  }

  ngOnInit(): void {
    //........to understand the observable..............
    // let counter = 0;
    // this.myObservable = new Observable((observer: any) => {
    //   let intervalId = setInterval(() => {
    //     observer.next(counter++); //it emits the value
    //     if (counter == 5) {
    //       observer.complete(); //it complete the emition.
    //       clearInterval(intervalId);
    //     }
    //   }, 1000);
    // });
    // this.myObservable.subscribe((val: any) => {
    //   console.log(val);
    // });

    // setTimeout(() => {

    //   this.myservice.setValue([1,2,3,4,5,6,7]);
    // }, 2000);

    // setTimeout(() => {

    //   this.data= this.myservice.getValue();
    // }, 3000);
    // this.getValue()

    //use of of() operator from rxjs.
    // const sourse= of(1,2,3,4,5,6)
    // sourse.subscribe(val=>console.log(val));

    //use of from() operator from rxjs.

    // const sourse= from([1,2,3,4,5,6,7,8]);
    // sourse.subscribe(val=>console.log(val));

    //use of interval() operator in rxjs.

    // const sourse = interval(1000);
    // let subscriptionId = sourse.subscribe((val) => {
    //   console.log(val);
    //   if (val == 10) {
    //     subscriptionId.unsubscribe();
    //   }
    // });

    // // Create an observable that emits mouse click events
    // const source = fromEvent(document, 'click');

    // // Apply the switchMap operator to map each click event to an interval observable
    // const example = source.pipe(
    //   switchMap(() => interval(1000)) // Start a new interval for each click event
    // );

    // // Subscribe to the resulting observable
    // const subscription = example.subscribe((value) => console.log(value));


  }

  //--------to check custom pipe and logic of pure and impure pipe.............
  // counter = 0;
  // changeOriginalVal() {
  //   console.log('button is clicked');
  //   this.counter++;
  //   if (this.counter == 5) {
  //     this.originalVal = 10;
  //   }
  // }

  //.........hostbinding and hostlistener.........

  // @HostBinding('style.color') mycolor;

  // @HostListener('click')
  // click(){
  //   console.log('object');
  //   this.mycolor= 'red';
  // }

  // counter=0
  // setValue(){
  //   this.myservice.setValue(this.counter++);
  // }

  // getValue(){
  //   this.myservice.getValue().subscribe((val:any)=>{
  //     console.log(val);
  //     if (typeof val === 'number') {
  //       this.data.push(val);
  //     }
  //   });
  // }
}
