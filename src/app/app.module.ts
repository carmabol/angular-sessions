import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { VisualModeComponent } from './visual-mode/visual-mode.component';
import { FormTodoComponent } from './form-todo/form-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ActionsTodoComponent } from './actions-todo/actions-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    VisualModeComponent,
    FormTodoComponent,
    ListTodoComponent,
    ActionsTodoComponent
  ],
  imports: [
    BrowserModule
    //AppRoutingModule
  ],
  exports:[
    TodoComponent,
    AppComponent,
    VisualModeComponent,
    FormTodoComponent,
    ListTodoComponent,
    ActionsTodoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
