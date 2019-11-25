import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    todos: Todo[];

    constructor() { }

    ngOnInit() {
        this.todos = [
            {
                id: 1,
                title: 'Todo one', 
                completed: false
            },
            {
                id: 2,
                title: 'Todo two', 
                completed: true
            },
            {
                id: 3,
                title: 'Todo three', 
                completed: false
            }
        ]
    }

}
