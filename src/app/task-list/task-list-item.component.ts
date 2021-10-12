import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Task} from "../task";

@Component({
  selector: "app-task-list-item",
  templateUrl: "task-list-item.component.html",
  styleUrls: ["task-list-item.component.css"]
})
export class TaskListItemComponent implements OnInit{
  @Input() public task: Task | undefined;
  @Output() public taskUpdated: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() public taskDeleted: EventEmitter<any> = new EventEmitter<any>();

  private textField: ElementRef | undefined;
  @ViewChild('text') set text(el: ElementRef) {
    if (el) {
      this.textField = el;
    }
  }

  public editingTask: boolean = false;
  public newStatus: boolean = false;
  public newText: string = "";

  public ngOnInit() {
    if (this.task) {
      this.newStatus = this.task.isDone;
      this.newText = this.task.text;
    }
  }

  public deleteTask() {
    this.taskDeleted.emit();
  }

  public updateTask() {
    this.taskUpdated.emit({
      isDone: this.newStatus,
      text: this.newText
    });
  }

  public editTask() {
    this.editingTask = true;
    setTimeout(() => {
      this.textField?.nativeElement.select();
    }, 50);
  }

  public cancelEdit() {
    this.editingTask = false;
  }

  public handleKeyPress(evt: KeyboardEvent) {
    if (evt.code == "Enter") {
      this.updateTask();
    }
  }
}
