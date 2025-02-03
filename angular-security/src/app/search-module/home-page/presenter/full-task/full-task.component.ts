import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../../../models/task';

@Component({
  selector: 'app-full-task',
  templateUrl: './full-task.component.html',
  styleUrl: './full-task.component.css'
})
export class FullTaskComponent implements OnInit{

  @Input()
  task!: Task | undefined;

  @Input()
  color!: string | undefined;

  constructor(private router: Router){}

  ngOnInit(): void {
      console.log(this.color + ' color')
  }

  viewTask(): void{

    this.router.navigate(['viewTask/' + this.task?.title]);
  }

}
