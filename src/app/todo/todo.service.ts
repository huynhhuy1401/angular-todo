import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList = [
    {
      todo: 'Go to class at 8 a.m',
      completed: false,
      editing: false,
    },
    {
      todo: 'Buy eggs',
      completed: false,
      editing: false,
    },
    {
      todo: 'Buy books',
      completed: true,
      editing: false,
    },
  ];
  constructor() {}

  addTodo(todo: string): void {
    this.todoList.push({
      todo,
      completed: false,
      editing: false,
    });
  }

  getTodos() {
    return this.todoList;
  }

  updateTodoState(todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todoIndex) {
    this.todoList.splice(todoIndex, 1);
  }

  editTodo(todo) {
    todo.editing = true;
  }

  updateTodo(todo, newTodo) {
    todo.todo = newTodo;
    todo.editing = false;
  }
  cancelEditingTodo(todo) {
    todo.editing = false;
  }
}
