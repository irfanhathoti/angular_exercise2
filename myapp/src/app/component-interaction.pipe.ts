import { Pipe, PipeTransform } from '@angular/core';
import { attendenceRadio } from './parent/attendenceRadio';

@Pipe({
  name: 'attendenceFilter'
})
export class ComponentInteractionPipe implements PipeTransform {

  transform(studentAtt: attendenceRadio[],attendence:string): attendenceRadio[] {
    if(!attendence){
      return studentAtt;
    }
    return studentAtt.filter(stu => stu.attendence== attendence)
  }

}
