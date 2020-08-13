import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos;
  newTodo = '';
  displayFilter = 'all';
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos('all');
  }

  addNewTodo() {
    this.todoService.addTodo(this.newTodo);
    this.todos = this.todoService.getTodos(this.displayFilter);
  }

  setFilter(displayFilter) {
    this.displayFilter = displayFilter;
    this.todos = this.todoService.getTodos(displayFilter);
  }

  updateTodoList() {
    this.todos = this.todoService.getTodos(this.displayFilter);
  }
}
