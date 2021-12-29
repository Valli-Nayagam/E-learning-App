import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'learn'
})
export class LearnPipe implements PipeTransform {

  transform(value: any, name:string): string {
  return "the name of the stud is " + name;
  }

}
