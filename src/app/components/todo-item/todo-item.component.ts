import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../../model/model'
import { TodoServiceService } from 'src/app/services/todo-service.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem:Todo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter
  constructor(private todoService:TodoServiceService) { }

  ngOnInit() {
}

//changes the uI for completed
setclasses(){
  let classes = {
    isCompleted:this.todoItem.completed 
  }
  return classes
  }
  //Toggle function
  onToggle(todoItem){
  //UI toggle
  todoItem.completed = !todoItem.completed
  //Server toggle
  this.todoService.togglecomplete(todoItem).subscribe(todoItem =>{
    console.log(todoItem)
  })
}
//delete function
onDelete(todoItem){
  this.deleteTodo.emit(todoItem)
}

}
