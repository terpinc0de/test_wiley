import {Injectable} from '@angular/core';
import {ToDoItem} from '../models/todo-item.model';

@Injectable()
export abstract class TodoDataSourcing {

  /**
   * returns all models
   */
  abstract getAll(): Promise<ToDoItem[]>;

  /**
   * creates the model
   */
  abstract create(item: ToDoItem): Promise<ToDoItem>;

  /**
   * updates the model
   */
  abstract update(item: ToDoItem): Promise<ToDoItem>;

  /**
   * removes the model
   */
  abstract delete(item: ToDoItem): Promise<ToDoItem>;
}
