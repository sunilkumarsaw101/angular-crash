import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { ServieToCheckSingletonService } from 'src/app/services/servie-to-check-singleton.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor(private service: ServieToCheckSingletonService) { }

  ngOnInit(): void {
    // this.myservice.showHello();
    this.service.showHello();
  }

}
