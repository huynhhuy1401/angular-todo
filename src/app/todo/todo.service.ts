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

  getTodos(displayFilter) {
    if (displayFilter === 'all') {
      return this.todoList;
    } else if (displayFilter === 'active') {
      return this.todoList.filter((todo) => !todo.completed);
    } else {
      return this.todoList.filter((todo) => todo.completed);
    }
  }

  updateTodoState(todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo) {
    this.todoList = this.todoList.filter((t) => t !== todo);
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
