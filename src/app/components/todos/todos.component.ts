import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/model'
import { TodoServiceService } from 'src/app/services/todo-service.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  
  constructor(private todoService:TodoServiceService) { }

  ngOnInit() {
   this.todoService.gettodos().subscribe(todos => 
      {this.todos = todos})
  }
  deleteTodo(todo:Todo){
    console.log("delete Me")
    //delteing on the UI
    this.todos = this.todos.filter(incomingTodo => incomingTodo.id !== todo.id);
    //delting from the server
    this.todoService.deleteTodo(todo).subscribe()
  }
  addtodo(todo:any){
    this.todoService.addtodo(todo).subscribe(todo => this.todos.push(todo))
  }

}
