import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  HostBinding,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterStateSnapshot } from '@angular/router';
import { TestLogicsComponent } from './core/test-logics/test-logics.component';
import { MyServiceService } from './services/my-service.service';
import { Observable, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  DataFromSer: any;
  currentTime: number;
  currentRoute: string;
  // title = 'crashCourse';
  // myName: any = 'skumar';
  // dataFromChild: any;
  // @ViewChild(TestLogicsComponent) testLogic: TestLogicsComponent;
  // addr: string;
  constructor(public router: Router ,private myService: MyServiceService, private http: HttpClient) {
    // const routerState: RouterStateSnapshot = router.routerState.snapshot;
    // console.log(routerState);
  }

  ngOnInit(): void {

    // const tiemObservable: Observable<number>= interval(1000);
    // tiemObservable.subscribe((val)=>this.currentTime=val);
    }

  // getDataFromService(){
  //  this.DataFromSer= this.myService.getData();
  //   }
  // ngAfterViewInit(){
  //   this.addr= this.testLogic.getAddress();
  //   console.log(this.addr);
  //   }

  // dataReceived(data){
  //  console.log(data);
  //  this.dataFromChild=data;
  // }

  // sendMessage(){
  //   this.myService.sendMessage('this message is from parent');
  // }

  // makeRequest(){
  //     this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((resp)=>{
  //       console.log(resp);
  //     })
  // }

  // @HostBinding('style.color') color;

  // @HostListener('click', ['$event'])
  // onClick(event: Event): void {
  //   console.log('Element clicked!', event);
  //   // Your custom logic here
  //   this.color= 'blue';
  // }
  // goToMyCompo(){
  //   console.log('object');
  //   this.router.navigate([{ outlets: { myComponent: 'gotoMyComponent' } }]);
  // }
  // goToTestLogic(){
  //   this.router.navigate([{ outlets: {testLogic: 'gotoTestLogicComponent' } }]);
  // }

}
