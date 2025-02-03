import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.css'
})
export class InputDateComponent {

  @ViewChild('inputElement', { static: false }) 
  inputRef!: ElementRef;

  @Input()
  form!: FormControl;

  getValue(): Date{
    return this.inputRef.nativeElement.value;
  }

}
