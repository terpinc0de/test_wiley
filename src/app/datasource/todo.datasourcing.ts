import {Injectable} from '@angular/core';
import {ToDoItem} from '../models/todo-item.model';

@Injectable()
export abstract class TodoDataSourcing {
  abstract getAll(): Promise<ToDoItem[]>;

  abstract create(item: ToDoItem): Promise<ToDoItem>;

  abstract update(item: ToDoItem): Promise<ToDoItem>;

  abstract delete(item: ToDoItem): Promise<ToDoItem>;
}
