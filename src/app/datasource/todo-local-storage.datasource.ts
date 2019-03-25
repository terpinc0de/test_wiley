import {Injectable} from '@angular/core';
import {ToDoItem} from '../models/todo-item.model';

@Injectable()
export class TodoLocalStorageDataSource {

  readonly key = 'todo_items';

  getAll(): Promise<ToDoItem[]> {
    const json = localStorage.getItem(this.key);
    const items = json ? JSON.parse(json) : [];
    return Promise.resolve(items);
  }

  async create(item: ToDoItem): Promise<ToDoItem> {
    const list = await this.getAll();
    // create item id
    item.id = Math.max(...list.map(i => i.id), 0) + 1;
    list.push(item);
    this.saveList(list);
    return Promise.resolve(item);
  }

  async update(item: ToDoItem): Promise<ToDoItem> {
    const list = await this.getAll();
    const index = list.findIndex(i => i.id === item.id);
    if (index > -1) {
      list.splice(index, 1, item);
      this.saveList(list);
      return Promise.resolve(item);
    }

    throw new Error('Can`t update ToDoItem.');
  }

  async delete(item: ToDoItem): Promise<ToDoItem> {
    const list = await this.getAll();
    const index = list.findIndex(i => i.id === item.id);
    if (index > -1) {
      list.splice(index, 1);
      this.saveList(list);
      return Promise.resolve(item);
    }

    throw new Error('Can`t delete ToDoItem.');
  }

  private saveList(list: ToDoItem[]) {
    list.sort(sort);
    localStorage.setItem(this.key, JSON.stringify(list));
  }
}

function sort(a: ToDoItem, b: ToDoItem) {
  return ('' + b.title).localeCompare(a.title);
}
