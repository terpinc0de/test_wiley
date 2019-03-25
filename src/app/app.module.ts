import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoComponent} from './todo/todo.component';
import {TodoDataSourcing} from './datasource/todo.datasourcing';
import {TodoLocalStorageDataSource} from './datasource/todo-local-storage.datasource';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';
import { FormComponent } from './todo/form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoStorage} from './storages/todo.storage';
import { ListComponent } from './todo/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FormComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TodoStorage,
    {
      provide: TodoDataSourcing,
      useClass: TodoLocalStorageDataSource,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
