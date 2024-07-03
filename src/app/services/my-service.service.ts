import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { MyInterceptorService } from './my-interceptor.service';

@Injectable(
  {
  providedIn: 'root',
}
)
export class MyServiceService {
  constructor(private http: HttpClient) {}
 
  //  data: any=['data 1', 'data 2', 'data 3'];
  //  api='https://jsonplaceholder.typicode.com/todos'

  //  getData(): Observable<string>{
  //   // return of(this.data);

  //   return this.http.get<any>(this.api);
  //   // return this.data;
  //  }

  //  setData(datafromtestlogic:any){
  //   alert('data is set')
  //     this.data= datafromtestlogic;
  //  }

  // private messageSubject= new Subject<string>();
  // sendMessage(msg:any){
  //   console.log(msg);
  //    this.messageSubject.next(msg);
  // }


  // private messageBehaviorSubject = new BehaviorSubject<any>(
  //   'this is initial msg'
  // );
  // sendMessage(msg: any) {
  //   console.log(msg);
  //   this.messageBehaviorSubject.next(msg);
  // }
  // getMessage() {
  //   return this.messageBehaviorSubject.asObservable();
  // }

  // private dataReplaySubjet= new ReplaySubject<any>(3);

  // setValue(data:any){
  //   console.log('vale set:', data);
  //    this.dataReplaySubjet.next(data);
  // }
  // getValue(): Observable<any>{
  //    return this.dataReplaySubjet;
  // }

  getListOfPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  // createPost(data:any){
  //  return this.http.post('https://jsonplaceholder.typicode.com/posts', data)
  // }

  // showHello(){
  //   console.log('helloo');
  // }

  // getData(id:any){
  //   console.log(id);
  //  return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // }

  getToDoList():Observable<any>{
    // return this.http.get()
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  register(formData:any): Observable<any>{
    return this.http.post('http://localhost:8000/student', formData);
  }
  login(formData:any): Observable<any>{
    return this.http.post('http://localhost:8000/auth', formData).pipe(catchError((err) => {
    
     console.log(err);
      return null;
    }))
  }

  getStudents():Observable<any>{
    return this.http.get('http://localhost:8000/student')
  }


}
