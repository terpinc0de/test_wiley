import { Component, OnInit } from '@angular/core';
import {ToDoItem} from '../models/todo-item.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  editedItem: ToDoItem;

  constructor() { }

  ngOnInit() {
  }

}
