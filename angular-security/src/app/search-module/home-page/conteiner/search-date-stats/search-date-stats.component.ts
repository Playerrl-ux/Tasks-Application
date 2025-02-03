import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../../../core/task.service';
import { Task } from '../../../../models/task';
import { Stats } from '../../../../models/stats';
import { Page } from '../../../../models/page';
import { StatsDatePresenterComponent } from '../../presenter/stats-date-presenter/stats-date-presenter.component';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskListService } from '../../../../core/task.list.service';

@Component({
  selector: 'app-search-date-stats',
  templateUrl: './search-date-stats.component.html',
  styleUrl: './search-date-stats.component.css'
})
export class SearchDateStatsComponent implements OnInit{

  @Input()
  stats!: string[];

  formStats!: FormControl;

  formDate!: FormControl;

  tasks!: Task[] | undefined;

  tasksColor!: {task: Task, color: string | undefined}[];

  selectedItems!: boolean[];

  page = 0;

  constructor(private service: TaskListService, private router: Router){}
  
  @ViewChild('stats_date') presenter!: StatsDatePresenterComponent;

  ngOnInit(): void {
    console.log('stats service ' + this.service.stats)
    if(this.service.stats){
      this.formStats = new FormControl(this.service.stats);
    }else{
      this.formStats = new FormControl('');
    }
    this.formDate = new FormControl(this.service.date?.substring(0, 10));
    this.returnTasks(0);
  }
  
  @Input()
  colorFunction!: (task: Task | null) => string | undefined;

  color!: string | undefined;

  applyColor(task: Task | null): string | undefined{
    return this.colorFunction(task);
  }

  search(): void{
    this.returnTasks(this.page);
  }

  private returnTasks(page: number): void{

    const stats = Stats[this.formStats.value as Stats];
    let date;
    if(this.formDate.value){
      date = new Date(this.formDate.value);
      date = date.toISOString();
    }
    this.service.getPageList(page, date, stats)?.subscribe({
      next: (tasks) => {this.tasks = tasks;
        console.log(tasks)
        this.tasksColor = [];
        this.tasks?.forEach((task: Task) => {this.tasksColor.push({task: task, color: this.applyColor(task)})
        if(this.page===0){
          this.selectedItems = Array(this.service.maximumPages).fill(false);
          this.selectedItems[0]=true;
        };})
      }
    })
  }

  exportSearch(page: number): void{
    console.log('export aqui: ' + page)
    this.returnTasks(page);
  }

  prevPag(): void{
    if(this.page>0){
      this.selectedItems[this.page]=false;
      this.page--
      this.selectedItems[this.page]=true;
      this.returnTasks(this.page);
    }
  }

  nextPag(): void{
    if(this.page < this.service.maximumPages-1 && this.page>-1){
      this.selectedItems[this.page]=false;
      this.page++;
      this.selectedItems[this.page]=true;
      console.log('page: ' + this.page);
      this.returnTasks(this.page);
    }  
  }

  goToEdit(title: string): void{
    this.router.navigate(['/edit-task', title]);
  }
}  
    
  

