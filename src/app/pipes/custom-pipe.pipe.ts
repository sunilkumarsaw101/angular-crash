import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  pure: false
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('pipe executed');
     return value.toUpperCase();
    // return null;
  }

}
