import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  updateTodoState(todo) {
    this.todoService.updateTodoState(todo);
  }

  deleteTodo(todoIndex) {
    this.todoService.deleteTodo(todoIndex);
  }

  editTodo(todo) {
    this.todoService.editTodo(todo);
  }

  updateTodo(todo, newTodo) {
    this.todoService.updateTodo(todo, newTodo);
  }
  cancelEditingTodo(todo) {
    this.todoService.cancelEditingTodo(todo);
  }
}
