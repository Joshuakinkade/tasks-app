import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public listTitle: string = "";
  public editingTitle: boolean = false;
  public newTitle: string = "";
  private inputEl: ElementRef | undefined;
  @ViewChild('input') set input(el: ElementRef) {
    if(el) {
      this.inputEl = el;
    }
  }

  ngOnInit() {
    this.listTitle = localStorage.getItem("list-title") || "Your Tasks";
  }

  editTile() {
    this.newTitle = this.listTitle;
    this.editingTitle = true;
    setTimeout(() => {
      this.inputEl?.nativeElement.select();
    }, 50);
  }

  saveTitle() {
    localStorage.setItem("list-title", this.newTitle);
    if (this.newTitle.trim().length > 0) {
      this.listTitle = this.newTitle;
    }
    this.editingTitle = false;
    this.newTitle = "";
  }

  handleTitleEnter(evt: KeyboardEvent) {
    if (evt.code == "Enter") {
      this.saveTitle();
    }
  }
}
