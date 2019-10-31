import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  @Output() addtodo:EventEmitter<any> = new EventEmitter
  title:string;
  constructor() { }

  ngOnInit() {
  }



  onSubmit(){
  const todo = {
    title:this.title,
    completed:false
  }
  this.addtodo.emit(todo)
}

}
