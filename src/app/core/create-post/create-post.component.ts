import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';
import { switchMap } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  createPost: FormGroup;
  // result: any;
  // data: Observable<any>;
  isShow:any='1';
  // emailForm: FormGroup;
  // myForm:FormGroup;
  // items=[{name: 'ram'},{name: 'shyam'}, {name: 'sita'}];
  // message: any='this message is to test [innerText] property';
  newForm:FormGroup;


  // @Input() inputVar:any

  @Output() outputVar= new EventEmitter<any>()
  constructor(
    private fb: FormBuilder,
    private myService: MyServiceService,
    private router: Router
  ) {}

  // user_name= new FormControl('', Validators.required);
  // emailId= new FormControl('', Validators.required);

  ngOnInit(): void {
   this.newForm=  this.fb.group({
    name:['', Validators.required],
    id:['', Validators.required]
   })


    this.createPost= this.fb.group({
      userId:['', Validators.required],
      id: ['', Validators.required],
      title: ['', Validators.required],
      body:['', Validators.required],
      radioButton: ['1', Validators.required]
    })
    // console.log(this.createPost.get('radioButton').value);

    // this.emailForm = this.fb.group({
    //   emails: this.fb.array([]),
    // });

    // this.user_name.valueChanges.subscribe((newVal)=>{
    //   console.log(newVal);
    // })

    // this.myForm= this.fb.group({
    //   checkbox1:[false, Validators.requiredTrue]
    // })


    // this.data= interval(1000);

  }

  // trackbyfun(index:number, item:any){
  // return item.id;
  // }

  // onSubmit() {
  //   console.log('hlo');
  //   console.log(this.createPost.value);
  //   // this.myService.createPost(this.createPost.value).subscribe((data) => {
  //   //   console.log(data);
  //   //   this.router.navigate(['/gotoTestLogicComponent']);
  //   // });
  // }

  showDiv(event:any){
    console.log(event);
    console.log(event.target.value);
    this.isShow= event.target.value;
  }

  // get emails() {
  //   return this.emailForm.get('emails') as FormArray;
  // }

  // addEmail() {
  //   const newEmail = this.fb.control('', Validators.email);
  //   this.emails.push(newEmail);
  // }

  // removeEmail(index: number) {
  //   this.emails.removeAt(index);
  // }
  // onSubmit1(){
  //   console.log(this.emailForm.value);
  // }

  // formSubmit(){
  //    console.log('form values:', {
  //    userName: this.user_name.value,
  //    email: this.emailId.value
  //    });
  // }
  // submitForm(){
  //   console.log('object');
  //   console.log(this.myForm.value);
  // }

  // getData(){
  //   this.myService.getData(1).pipe(
  //     switchMap((data:any) =>{
  //      console.log(data);
  //      let res= this.myService.getData(data.id);
  //      console.log(res);
  //      return res;
  //     }
  //      )
  //   ).subscribe(result=>
  //     {
  //       console.log("result: ",result);
  //       this.result=result;
  //     }
      
  //     )
  // }

  // demoMethod(){
  //   console.log('this is demo message');
  //   // return 'msg from child component';
  // }

  // sendvalue(){
  //   this.outputVar.emit('hlo from child component')
  //   // this.router.navigate(['/gotoTestLogicComponent']);
  // }
  // onSubmit(){
  //   console.log('object');
  //   console.log('this is forms values: ', this.newForm.value);
  // }

}
