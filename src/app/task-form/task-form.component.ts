import {Component} from "@angular/core";
import {TasksService} from "../tasks.service";

@Component({
  selector: "app-task-form",
  templateUrl: "task-form.component.html",
  styleUrls: ["task-form.component.css"]
})
export class TaskFormComponent {
  public text: string = "";

  constructor(private taskService: TasksService) {}

  public onSubmit() {
    this.taskService.addTask({
      isDone: false,
      text: this.text
    });
    this.text = "";
  }
}
