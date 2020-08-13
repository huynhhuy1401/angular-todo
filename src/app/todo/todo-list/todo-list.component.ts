import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todos;
  @Output() todoListUpdated = new EventEmitter();
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  updateTodoState(todo) {
    this.todoService.updateTodoState(todo);
    this.updateTodoList();
  }

  deleteTodo(todoIndex) {
    this.todoService.deleteTodo(todoIndex);
    this.updateTodoList();
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

  updateTodoList() {
    this.todoListUpdated.emit();
  }
}
