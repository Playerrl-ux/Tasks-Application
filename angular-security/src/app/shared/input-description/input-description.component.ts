import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-description',
  templateUrl: './input-description.component.html',
  styleUrl: './input-description.component.css'
})
export class InputDescriptionComponent {

  @Input()
  id!: string;

  @Input()
  placeholder!: string;

  @Input()
  type!: string;

  @Input()
  class!: string;

  @Input()
  form!: FormControl;



}
