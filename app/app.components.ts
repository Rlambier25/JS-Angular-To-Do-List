import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>To Do</h1>
      <h3 *ngFor="#task of tasks">{{ task.description }}</h3>
    </div>
  `
})

export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("first task", 0),
      new Task("second task", 1),
      new Task("third task", 2),
      new Task("fourth task", 3)
    ];
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}
