import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>To Do</h1>
      <task-list
        [taskList]="tasks">
      </task-list>
    </div>
  `
})

export class AppComponent {
  public tasks: Task[];
  constructor() {
    this.tasks = [
      new Task("first task", 0),
      new Task("second task", 1),
      new Task("third task", 2),
      new Task("fourth task", 3)
    ];
  }
}
