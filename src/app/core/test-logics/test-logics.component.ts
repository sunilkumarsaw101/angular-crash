import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { MyServiceService } from 'src/app/services/my-service.service';
import { CreatePostComponent } from '../create-post/create-post.component';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-test-logics',
  templateUrl: './test-logics.component.html',
  styleUrls: ['./test-logics.component.css'],
})
export class TestLogicsComponent implements OnInit {
  postLists: any;
  // msgFromParent: any;
  //  private subscription: Subscription;
  // data: any;
  // @Input() nameFromParentComp:any;
  // @Output() childDataRefVar = new EventEmitter() ;

  inputValue = 'this is input value';
  receivedMsg: any;

  constructor(private router: Router, private myService: MyServiceService) {
    // this.myService.getMessage().subscribe((msg) => {
    //   this.msgFromParent = msg;
    // });
  }

  ngOnInit(): void {
    // this.getPosts();
  }


  //pagination.

  // dataset: any = []; // Your dataset
  // currentPage = 1;
  // itemsPerPage = 10; // Number of items to display per page
  // get totalPages(): number {
  //   return Math.ceil(this.dataset.length / this.itemsPerPage);
  // }

  // get visibleItems(): any[] {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   return this.dataset.slice(startIndex, endIndex);
  // }

  // prevPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //   }
  // }

  // nextPage(): void {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //   }
  // }

  // goToPage(pageNumber: number): void {
  //   if (pageNumber >= 1 && pageNumber <= this.totalPages) {
  //     this.currentPage = pageNumber;
  //   }
  // }

//pagination end


  //  mySubject= new Subject();
  //  mySubject.subscribe()

  //   setDataInService(){
  //   this.myService.setData('this is data from test-logic');
  // }
  // changeName() {
  //   this.nameFromParentComp = 'Raj';
  //   this.childDataRefVar.emit(this.nameFromParentComp);
  // }

  // getAddress(){
  //   return 'Jharkhand';
  // }



  // ngOnDestroy() {
  // this.subscription.unsubscribe();
  // }

  // loadLazyModue() {
  //   console.log('hloo');
  //   this.router.navigate(['/lazy']);
  // }

  // getPosts(){
  //   this.myService.getListOfPosts().subscribe((res)=>{
  //     console.log(typeof res);
  //     this.postLists=res;
  //     // this.postLists=this.postLists.slice(0, 10)
  //     this.dataset=res;
  //   })
  // }

  // addPost() {
  //   console.log('hlo');
  //   this.router.navigate(['/createPost']);
  // }

  // @ViewChild('parentElement') myDiv: ElementRef;

  // ngAfterViewInit(){
  //   console.log(this.myDiv.nativeElement);

  // }

  // @ViewChild(CreatePostComponent) childCompRef: CreatePostComponent;

  // @ViewChildren(CreatePostComponent) tempVar: QueryList<CreatePostComponent>;

  // ngAfterViewInit(){
  //   // console.log('object');
  //   // const res= this.childCompRef.demoMethod();
  //   // console.log(res);

  // //   const res1= this.ReferenceVar.nativeElement.textContent;
  // //   console.log(res1);

  // this.tempVar.forEach((ele)=>{
  //   // console.log('element content:- ',ele.nativeElement.textContent);
  //   ele.demoMethod();
  // })
  // }

  // showVal($event:any){
  //      this.receivedMsg= $event;
  //      console.log(this.receivedMsg);
  // }

  goToPractice4(){
    this.router.navigate(['/practice4'])
  }
  // gotoMycompo() {
  //   this.router.navigate(['/gotoMyComponent']);
  // }
  
  // goToPractice1() {
  //   this.router.navigate(['/practice1']);
  // }
  // goToPracticeForm() {
  //   this.router.navigate(['/practiceForm']);
  // }
  // showTheTodoList() {
  //   this.router.navigate(['/practiceResolver']);
  // }
  // goToLogin() {
  //   this.router.navigate(['/login']);
  // }
  // getStudents() {
  //   this.myService.getStudents().subscribe((res: any) => {
  //     console.log(res);
  //   });
  // }
  // gotoCheckCanDeactivateCompo(){
  //   this.router.navigate(['/goToCheckCanDeactivateGuard'])
  // }


  // gotoProgress(){
  //   this.router.navigate(['/gotoprogress']);
  // }
}
