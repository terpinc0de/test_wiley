import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoStorage} from '../../storages/todo.storage';
import {ToDoItem} from '../../models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output()
  editedItem = new EventEmitter<ToDoItem>();

  constructor(private todoStorage: TodoStorage) {
  }

  ngOnInit() {
  }

  getItems() {
    return this.todoStorage.getAll();
  }

  saveItem(item: ToDoItem) {
    this.todoStorage.save(item);
  }

  editItem(item: ToDoItem) {
    this.editedItem.emit(item);
  }

  deleteItem(item: ToDoItem) {
    this.todoStorage.delete(item);
  }

  identify(index, item) {
    return item.id;
  }
}
