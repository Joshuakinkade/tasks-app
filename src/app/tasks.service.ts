import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Task} from "./task";

@Injectable({providedIn: "root"})
export class TasksService {
  public taskSubject$ = new Subject<Task[]>();
  private tasks: Task[] = [];

  public getTasks(): Task[] {
    this.loadTasks();
    return this.tasks;
  }

  public addTask(task: Task) {
    this.loadTasks();
    this.tasks.push(task);
    this.saveTasks();
    this.taskSubject$.next(this.tasks);
  }

  public updateTask(index: number, task: Task) {
    this.loadTasks();
    this.tasks[index] = task;
    this.saveTasks();
    this.taskSubject$.next(this.tasks);
  }

  public deleteTask(index: number) {
    this.loadTasks();
    let tasks = this.tasks.slice(0,index);
    tasks = tasks.concat(this.tasks.slice(index+1));
    this.tasks = tasks;
    this.saveTasks();
    this.taskSubject$.next(this.tasks);
  }

  private loadTasks() {
    const taskJSON = localStorage.getItem("tasks")
    if (taskJSON) {
      this.tasks = JSON.parse(taskJSON);
    }
  }

  private saveTasks() {
    const taskJSON = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", taskJSON);
  }
}
