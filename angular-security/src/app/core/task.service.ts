import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { Task } from "../models/task";
import { Stats } from "../models/stats";
import { Page } from "../models/page";


@Injectable({
    providedIn: 'root'
})
export class TaskService{

    
        
    private readonly url = 'http://localhost:8080/task';

    size = 4;

    constructor(private http: HttpClient){}

    private returnHttpParams(page: number): HttpParams{
        return new HttpParams()
        .set('size', this.size)
        .set('page', page);
    }

    returnTaskByTitle(title: string): Observable<Task>{
        return this.http.get<Task>(this.url + '/title/' + title);
    }

    returnTaskByStats(stats: Stats, page: number): Observable<Page<Task>>{
        
        const params = this.returnHttpParams(page);
        return this.http.get<Page<Task>>(this.url + '/stats/' + stats, {params});
    }

    returnTaskByDate(date: string | undefined, page: number): Observable<Page<Task>>{
       
        const params = this.returnHttpParams(page);
        return this.http.get<Page<Task>>(this.url + '/before-date/' + date, {params});
    }

    returnTaskByDateStats(date: string, stats: Stats, page: number): Observable<Page<Task>>{
        
        const params = this.returnHttpParams(page);
        return this.http.get<Page<Task>>(this.url + '/before-date-stats/' + date + '/' + stats, {params});
    }

    createTask(task: Task): Observable<Task>{
        return this.http.post<Task>(this.url + '/create', task);
    }

    editTask(task: Task, title: String): Observable<Task>{
        return this.http.put<Task>(this.url + '/edit/' + title, task);
    }

   
}