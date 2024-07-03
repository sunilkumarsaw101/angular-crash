import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
   widthInPercent=0;
  constructor() { }

  ngOnInit(): void {
  let barElem= document.getElementById('barId');
  console.log(barElem);
  let id=  setInterval(()=>{
    this.widthInPercent+= 10;
       barElem.style.width= `${this.widthInPercent}%`;
       if(this.widthInPercent==90){
        clearInterval(id);
       }
    }, 1000);
  }

}
