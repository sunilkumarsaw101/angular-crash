import { Injectable } from '@angular/core';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ServieToCheckSingletonService {

  constructor() { }
  showHello(){
    console.log('msg from service');
  }
}
