import { Component, ViewChild } from '@angular/core';
import { TaskService } from '../../core/task.service';
import { Task } from '../../models/task';
import { InputTextComponent } from '../../shared/input-text/input-text.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  color!: string;

  task!: Task | null;

  tasks !: Task[];

  stats = ['STARTED', 'NOT_STARTED', 'FINISHED'];



  @ViewChild('inputField') inputField!: InputTextComponent; // Referência ao componente de input
  

  constructor(private service: TaskService){}

  getInputValue(): string{
    return this.inputField.getValue();
  }

  searchTask(title: string): void{

    if(title){
      this.service.returnTaskByTitle(title).subscribe({
        next: (task)=> {this.task = task; this.tasks = [this.task, this.task]}, 
        error: (error) => {console.log(error); this.task = null}
      })
      
      
    }
    
  }

  checkDate(task: Task | null): string | undefined{

    if(task && task.estimatedEnd){
      const milisecPerDay = 86400000;
      const estimatedEndDate = task.estimatedEnd instanceof Date 
            ? task.estimatedEnd 
            : new Date(task.estimatedEnd);

      const daysRemaining = (estimatedEndDate.getTime() - Date.now()) / milisecPerDay;
      if(daysRemaining <= 5){
        return "red";
      }else if(daysRemaining <= 10){
        return "yellow";
      }else{
        return "green";
      }
    }else{
      return undefined;
    }
  }





}
