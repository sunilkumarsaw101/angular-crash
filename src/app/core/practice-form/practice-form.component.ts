import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.css']
})
export class PracticeFormComponent implements OnInit {
  // RegistrationForm:FormGroup;
  formWithFile: FormGroup;
  fileData: File | null = null;
  constructor(private fb: FormBuilder, private router: Router, private myservice: MyServiceService) { }

  ngOnInit(): void {
  //  this.RegistrationForm=  this.fb.group({
  //   name: ['', Validators.required],
  //   empId: ['', Validators.required],
  //   message: ['', Validators.required],
  //   radioButton: ['', Validators.required],
  //   checkbox: ['', Validators.required],

  //  })
  this.formWithFile= this.fb.group({
         name: ['', Validators.required],
         email: ['', Validators.required],
         password: ['', Validators.required],
        //  resume: ['', Validators.required]
  });
  }
  // submitForm(){
  //    console.log(this.RegistrationForm.value);
  //    this.router.navigate(['/gotoTestLogicComponent'])
  // }

  // uploadFile(event:any){
  //   let file= event.target.files[0];
  //   console.log(file);
  //   // this.formWithFile.get('resume').setValue(file);
  //   this.fileData= file;
  // }

  submiteFormWithFile() {
    this.myservice.register(this.formWithFile.value).subscribe((res:any)=>{
      console.log(res);
    })
    // if (this.formWithFile.valid && this.fileData) {
      // console.log("File Data:", this.fileData);
  
      // const formData = new FormData();
      // formData.append('resume', this.fileData);
      // formData.append('name', this.formWithFile.get('name').value);
      // formData.append('email', this.formWithFile.get('email').value);
      // formData.append('password', this.formWithFile.get('password').value);
        
        // console.log("Form Data:", formData);
       
        this.router.navigate(['/gotoTestLogicComponent']);
      
    // }
  }
  

}
