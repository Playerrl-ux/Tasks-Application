import { Component, Input, ViewChild } from '@angular/core';
import { InputTextComponent } from '../../../../shared/input-text/input-text.component';
import { TaskService } from '../../../../core/task.service';
import { Task } from '../../../../models/task';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search-title',
  templateUrl: './search-title.component.html',
  styleUrl: './search-title.component.css'
})
export class SearchTitleComponent {

  @ViewChild('inputField') inputField!: InputTextComponent; // Referência ao componente de input
  
  task!: {task: Task, color: string | undefined} | null;

  color!: string | undefined;

  @Input()
  colorFunction!: (task: Task | null) => string | undefined;

  constructor(private service: TaskService, private router: Router){}

  getInputValue(): string{
    return this.inputField.getValue();
  }

  searchTask(title: string): void{

    if(title){
      this.service.returnTaskByTitle(title).subscribe({
        next: (task)=> {this.task = {task: task, color: this.applyColor(task)}}, 
        error: (error) => {console.log(error); this.task = null}
      })
    }
    
  }

  applyColor(task: Task): string | undefined{
    return this.colorFunction(task);
  }

  goToEdit(title: string){
    this.router.navigate(['/edit-task', title]);
  }

}
