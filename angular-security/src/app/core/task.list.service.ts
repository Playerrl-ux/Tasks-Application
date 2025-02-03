import { Injectable, OnInit } from "@angular/core";
import { Task } from "../models/task";
import { TaskService } from "./task.service";
import { Stats } from "../models/stats";
import { Page } from "../models/page";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskListService{

    constructor(private service: TaskService){}
 
    private tasks: Map<number, Task[]> = new Map();
    stats!: Stats | undefined;
    date!: string | undefined;
    private maxPage = 0;

    get list(): Map<number, Task[]>{
        return this.tasks;
    }

    get maximumPages(): number {
        return this.maxPage;
    }

    setList(task: Task[], page: number){
        this.tasks.set(page, task);
    }

    getPageList(page: number, data: string | undefined, stats: Stats|undefined): Observable<Task[]> | undefined{
      
      if(this.stats == stats && this.date == data && this.tasks.has(page)){
        return new Observable((observer) => {
            observer.next(this.tasks.get(page));
            observer.complete();
        })
        
      }else{
        console.log('page aqui ' + page)
        this.date = data;
        this.stats = stats;
        return this.assignTasks(page);
      }
    }

    private assignTasks(page: number): Observable<Task[]> | undefined{
        let obs: Observable<Page<Task>> = new Observable();
        if(this.stats || this.date){
            if(this.stats && this.date){
              obs = this.service.returnTaskByDateStats(this.date, this.stats, page);
            }else if(this.stats){
              obs = this.service.returnTaskByStats(this.stats, page);
            }else{
              obs = this.service.returnTaskByDate(this.date, page);
            }
            return new Observable((observer) => {
                obs.subscribe({
                  next: (pageR) => {
                    this.tasks.set(page, pageR.content);
                    this.maxPage = pageR.totalPages;
                    observer.next(pageR.content); // Enviar as tarefas para quem assinou
                    observer.complete();
                  },
                  error: (err) => observer.error(err),
                });
              });
        }
        return undefined;
    }

    public editTask(task: Task){
      
      this.service.editTask(task, task.title).subscribe({
        next: (task) => {
          for(const taskPage of this.tasks.values()){
            for(let i=0; i<taskPage.length; i++){
              if(taskPage[i].title == task.title){
                taskPage[i] = task;
                return;
              }
            }
          }
        }
      });

    }

    public createTask(task: Task){
      this.service.createTask(task).subscribe({
        next: () => {
          this.tasks = new Map();

        }
      })
    }





}