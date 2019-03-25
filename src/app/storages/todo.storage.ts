import {Injectable} from '@angular/core';
import {ToDoItem} from '../models/todo-item.model';
import {TodoDataSourcing} from '../datasource/todo.datasourcing';

@Injectable()
export class TodoStorage {
  private items: ToDoItem[];

  constructor(private dataSource: TodoDataSourcing) {
    dataSource.getAll().then(i => this.items = i);
  }

  getAll(): ToDoItem[] {
    return this.items;
  }

  async save(item: ToDoItem) {
    if (!item.id) {
      await this.dataSource.create(item);
    } else {
      await this.dataSource.update(item);
    }
    this.items = await this.dataSource.getAll();
  }

  async delete(item: ToDoItem) {
    await this.dataSource.delete(item);
    this.items = await this.dataSource.getAll();
  }
}
