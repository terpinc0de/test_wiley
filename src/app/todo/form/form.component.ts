import {Component, Input} from '@angular/core';
import {ToDoItem} from '../../models/todo-item.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoStorage} from '../../storages/todo.storage';

@Component({
  selector: 'app-todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  toDoItem: ToDoItem = new ToDoItem();
  isEdit = false;

  @Input()
  set editedItem(item: ToDoItem) {
    if (item) {
      this.toDoItem = item;
      this.form.controls.title.setValue(item.title);
      this.isEdit = true;
    }
  }

  form: FormGroup;

  constructor(fb: FormBuilder, private toDoStorage: TodoStorage) {
    this.form = fb.group({
      title: [this.toDoItem.title, Validators.required]
    });
  }

  submit(e) {
    e.preventDefault();
    if (this.form.valid) {
      this.toDoItem.title = this.form.value.title;
      this.toDoStorage.save(this.toDoItem);
      this.form.reset();
      this.toDoItem = new ToDoItem();
      this.isEdit = false;
    }
  }
}
