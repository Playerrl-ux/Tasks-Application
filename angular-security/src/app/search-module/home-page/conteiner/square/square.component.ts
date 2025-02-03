import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrl: './square.component.css'
  })
  export class SquareComponent {
  
    @Input()
    searchFunc!: (page: number)=>void;
    
    @Input()
    number!: number;

    @Input()
    selected!: boolean;
  
    search(): void{
      console.log('chegou aqui')
      this.searchFunc(this.number-1);
    }
  
  
  }