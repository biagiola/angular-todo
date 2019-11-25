import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';
  name: string = 'Albert';

  constructor() {
    this.changedname('John');
  }

  changedname( _name: string ) {
    this.name = _name
  }
}
