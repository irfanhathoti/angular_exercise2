import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private httpClient: HttpClient) { }
  getAllData() {
    return this.httpClient.get<any>(" http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  postStudents(data:any){
    return this.httpClient.post<any>(" http://localhost:3000/posts",data)
    .pipe(map((response:any)=>{
      return response
    }))
  }


  
  updateStudent(data:any,id:any){
    return this.httpClient.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((response:any)=>{
      return response
    }))
  }
  




  deleteStudent(id:any){
    return this.httpClient.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((response:any)=>{
      return response
    }))
  }
}