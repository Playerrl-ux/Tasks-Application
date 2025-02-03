import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-title',
  templateUrl: './task-title.component.html',
  styleUrl: './task-title.component.css'
})
export class TaskTitleComponent{

  @Input()
  title!: string;

  @Input()
  color!: string | undefined;

  @Output() taskEvent = new EventEmitter<string>();

  clickEvent(): void {
    this.taskEvent.emit(this.title);
  }


}
