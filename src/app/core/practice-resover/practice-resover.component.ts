import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-practice-resover',
  templateUrl: './practice-resover.component.html',
  styleUrls: ['./practice-resover.component.css']
})
export class PracticeResoverComponent implements OnInit {
  todolist:any;
  constructor(private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  this.todolist= this.activatedRouter.snapshot.data.resolveData;
  this.todolist= this.todolist.slice(0,20);
  console.log(this.todolist);
  }

}
