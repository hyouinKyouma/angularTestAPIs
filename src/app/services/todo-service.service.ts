import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/model'

const httpOptions = {
  headers: new HttpHeaders(
    {
      'content-Type':'application/json'
    }
  )

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=10'
  constructor(private http:HttpClient) { }

  gettodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
  togglecomplete(todoItem:Todo):Observable<any>{
    const url = `${this.todosUrl}/${todoItem.id}`;
    return this.http.put(url, todoItem, httpOptions);
  }
  deleteTodo(todo){
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions)
  }
  addtodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl,todo, httpOptions)
  }
}
