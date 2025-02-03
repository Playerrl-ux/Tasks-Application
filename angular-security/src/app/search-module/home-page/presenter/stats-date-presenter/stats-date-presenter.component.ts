import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Task } from '../../../../models/task';
import { InputDateComponent } from '../../../../shared/input-date/input-date.component';
import { LabelComponent } from '../../../../shared/label/label.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stats-date-presenter',
  templateUrl: './stats-date-presenter.component.html',
  styleUrl: './stats-date-presenter.component.css'
})
export class StatsDatePresenterComponent {

  @Input() stats!: string[];
  @Input() tasks!: any[];
  @Input() selectedItems!: boolean[];
  @Input() exportSearch!: (page: number)=>void;
  @Input() formStats!: FormControl;
  @Input() formDate!: FormControl;
  

  @ViewChild('date') dateInput!: InputDateComponent;
  @ViewChild('label') labelInput!: LabelComponent;

  @Output() searchEmit = new EventEmitter<any>();
  @Output() prevPagEmit = new EventEmitter();
  @Output() nextPagEmit = new EventEmitter();
  @Output() taskTitleEvent = new EventEmitter<string>();


  search(): void{
    this.searchEmit.emit({date: this.dateInput.getValue(), stats: this.labelInput.getValue()});
  }

  prevPag(): void{
    this.prevPagEmit.emit();
  }

  nextPag(): void{
    this.nextPagEmit.emit();
  }

  taskTitleEmit(title: string){
    this.taskTitleEvent.emit(title)
  }


}
