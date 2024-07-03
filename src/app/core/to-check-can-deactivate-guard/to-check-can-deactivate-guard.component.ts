import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-check-can-deactivate-guard',
  templateUrl: './to-check-can-deactivate-guard.component.html',
  styleUrls: ['./to-check-can-deactivate-guard.component.css']
})
export class ToCheckCanDeactivateGuardComponent implements OnInit {
 hasUnsavedValue: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  hasUnsave(){
    return this.hasUnsavedValue;
  }

  makeChange(){
    this.hasUnsavedValue=true;
  }

}
