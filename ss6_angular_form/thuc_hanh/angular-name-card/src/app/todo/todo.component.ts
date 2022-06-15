import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from './todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }

  toggleTodo(todo: Todo) {
    todo.complete = !todo.complete;
    this.todoService.updateTodo(todo).subscribe(() => {
      this.ngOnInit();
    });
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };

      this.todoService.createTodo(todo).subscribe(() => {
        this.content.reset();
        this.ngOnInit();
      });
    }
  }

  delete(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todoService.deleteTodo(id);
      this.ngOnInit();
    });
  }
}
