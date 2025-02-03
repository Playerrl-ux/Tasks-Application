import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {

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

  @ViewChild('inputElement', { static: false }) 
  inputRef!: ElementRef;

  getValue(): string{
    return this.inputRef.nativeElement.value;
  }




}
