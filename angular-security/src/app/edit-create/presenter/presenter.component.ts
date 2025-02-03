import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrl: './presenter.component.css'
})
export class PresenterEditCreateComponent {

  @Input() formGroup!: FormGroup;
  @Input() title!: FormControl;
  @Input() description!: FormControl;
  @Input() estimatedEnd!: FormControl;
  @Input() important!: FormControl;
  @Input() urgent!: FormControl;
  @Input() stats!: FormControl;
  @Input() options!: string[];
  @Input() message!: string;
  @Input() color!: string;
  @Input() isOpen!: boolean;

  @Output() submitEvent = new EventEmitter();
  @Output() redirectEvent = new EventEmitter();

  click(): void{
    this.submitEvent.emit();
  }

  redirect(){
    this.redirectEvent.emit()
  }
}
