import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Task } from "../../../../models/task";
import { InputTextComponent } from "../../../../shared/input-text/input-text.component";

@Component({
  selector: 'app-title-presenter',
  templateUrl: './title-presenter.component.html',
  styleUrl: './title-presenter.component.css'
})
export class TitlePresenterComponent {

  @Input() task!: {task: Task, color: string | undefined} | null;
  @Input() color: string | undefined;

  @ViewChild('title') inputText!: InputTextComponent;

  @Output() clickEvent = new EventEmitter<string>();
  @Output() searchEvent = new EventEmitter<string>();

  emitClick(): void{
    this.clickEvent.emit(this.task?.task.title);
  }

  emitSearchEvent(): void{
    console.log('entrou')
    this.searchEvent.emit(this.inputText.getValue());
  }
}
