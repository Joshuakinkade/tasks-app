import {Component, OnInit} from "@angular/core";
import {Task} from "../task";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[] = [];
  public editing: number = -1;
  public newText: string = "";

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
    this.tasksService.taskSubject$.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  saveTask(index: number, task: Task) {
    this.tasksService.updateTask(index, task);
  }

  deleteTask(index: number) {
    this.tasksService.deleteTask(index);
  }

}
