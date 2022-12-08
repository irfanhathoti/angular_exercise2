import { Pipe, PipeTransform } from '@angular/core';
import { StudentDetails } from '../students/StudentsDetails';

@Pipe({
  name: 'batchFilter'
})
export class BatchFilterPipe implements PipeTransform {

  transform(StudentData:StudentDetails[], batch:number):StudentDetails[]  {
    if(!batch){
      return StudentData
    }
    return StudentData.filter(StudentData => StudentData.batch == batch )
  }

}

