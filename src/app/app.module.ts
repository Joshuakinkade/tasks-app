import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskFormComponent} from "./task-form/task-form.component";
import {FormsModule, NgForm} from "@angular/forms";
import {TaskListItemComponent} from "./task-list/task-list-item.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
