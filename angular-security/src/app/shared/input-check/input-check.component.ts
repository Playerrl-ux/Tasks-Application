import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-check',
  templateUrl: './input-check.component.html',
  styleUrl: './input-check.component.css'
})
export class InputCheckComponent implements OnInit{
  

  @Input()
  id!: string;

  @Input()
  placeholder!: string;

  @Input()
  form!: FormControl;


  
  class!: string;

  flag: boolean = false;

  applyClass(): void{
    if(this.flag){
      this.class = "outline-none bg-gray-400 ring-0 peer";
    }else{
      this.class = ''; 
    }
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe({
      next: (value: boolean)=>{this.flag=value; this.applyClass()} 
    })
  }



}
