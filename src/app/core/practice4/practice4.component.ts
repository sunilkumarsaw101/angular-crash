import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice4',
  templateUrl: './practice4.component.html',
  styleUrls: ['./practice4.component.css'],
})
export class Practice4Component implements OnInit {
  // time: number = 0;
  // intervalId: any;
  // isRunning: boolean = false;
  // formatedTime: string = '00:00';
  // constructor() {}

  ngOnInit(): void {
    // this.reset();
  }

  // ngOnDestroy() {
  //   this.clearTimer();
  // }

  // start() {
  //   if (!this.isRunning) {
  //     this.isRunning = true;
  //     this.intervalId = setInterval(() => {
  //       this.time++;
  //       this.updateFormattedTime();
  //     }, 1000);
  //   }
  // }
  // updateFormattedTime() {
  //   let min = Math.floor(this.time / 60)
  //     .toString()
  //     .padStart(2, '0');
  //   let sec = Math.floor(this.time % 60)
  //     .toString()
  //     .padStart(2, '0');
  //   this.formatedTime = `${min}:${sec}`;
  // }

  // stop() {
  //   if (this.isRunning) {
  //     this.clearTimer();
  //     this.isRunning = false;
  //   }
  // }

  // resume() {
  //   if (!this.isRunning) {
  //     this.start();
  //   }
  // }

  // reset() {
  //   this.clearTimer();
  //   this.time = 0;
  //   this.updateFormattedTime();
  //   this.isRunning = false;
  // }

  // private clearTimer() {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }




  hobbyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.hobbyForm = this.fb.group({
      hobbies: this.fb.array([])
    });
  }

  get hobbies(): FormArray {
    return this.hobbyForm.get('hobbies') as FormArray;
  }

  createHobby(): FormGroup {
    return this.fb.group({
      hobby: ['', Validators.required]
    });
  }

  addHobby(): void {
    this.hobbies.push(this.createHobby());
  }

  removeHobby(index: number): void {
    this.hobbies.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.hobbyForm.value);
  }
}
