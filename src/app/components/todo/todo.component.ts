import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    todos: Todo[];

    constructor( private todoService:TodoService ) { }

    ngOnInit() {
        this.todoService.getTodos().subscribe( todos => {
            this.todos = todos;
        });
    }

}
