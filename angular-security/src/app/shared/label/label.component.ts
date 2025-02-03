import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent implements OnInit{
  
  @Input()
  options!: string[];

  @Input()
  stats!: FormControl;

  @Input()
  form!: FormControl;

  ngOnInit(): void {
      if(!this.form){
        this.form = new FormControl('');
      }
  }


  getValue(): string{
    return this.form.value;
  }



}
