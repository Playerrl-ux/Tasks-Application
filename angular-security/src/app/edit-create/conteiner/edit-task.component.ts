import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../core/task.service';
import { Task } from '../../models/task';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit{

  constructor(private service: TaskService, private router: ActivatedRoute, private routerUrl: Router){}
  
  stats = ["STARTED", "NOT_STARTED", "FINISHED"];
  title: string | null =  null;
  message!: string;
  color!: string;
  isOpen = false;
  
  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
    description: new FormControl(''),
    important: new FormControl(false),
    urgent: new FormControl(false),
    stats: new FormControl('', [Validators.required]),
    estimatedEnd: new FormControl('')
  })

  ngOnInit(): void {
    this.title = this.router.snapshot.paramMap.get('title');
    if(this.title){
      this.service.returnTaskByTitle(this.title).subscribe({
        next: (data: Task) =>  this.inicializeForm(data)
      })
    }
  }


  getControl(controlName: string): FormControl {
    return this.formGroup.get(controlName) as FormControl;
  }

  click(): void{
    this.formGroup.markAllAsTouched();
    if(!this.formGroup.invalid){
      if(this.title){
        this.service.editTask(this.createTask(this.formGroup), this.title).subscribe({
          next: (data: Task)=>{console.log(data); 
            this.isOpen = true;
            this.message = "Task Editada com sucesso";
            this.color = 'green'},
          error: ()=> {this.isOpen = true;
            this.message = "Falha ao editar Task, tente novamente";
            this.color = "red";
          }
        })
      }else{
        this.service.createTask(this.createTask(this.formGroup)).subscribe({
          next: (data: Task)=>{console.log(data); 
            this.isOpen = true;
            this.message = "Task Criada com sucesso";
            this.color = 'green'},
          error: ()=> {this.isOpen = true;
            this.message = "Falha ao criar Task, tente novamente";
            this.color = "red";
          }
        })
      }
    }
    

  }

  inicializeForm(task: Task): void{
    console.log(task)
    Object.keys(task).forEach(key => {
      if(key==='estimatedEnd'){
        const date = new Date((task as any)[key])
        const formattedDate = new Intl.DateTimeFormat('en-CA', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }).format(date);
        console.log(formattedDate);
        this.formGroup.get(key)?.setValue(formattedDate)
      }else{
        this.formGroup.get(key)?.setValue((task as any)[key])
      }
    });
    this.formGroup.get('title')?.disable();
    console.log(task.estimatedEnd)
    
  }

  createTask(form: FormGroup): Task{
    let task: Task = {} as Task;
    
    Object.keys(form.controls).forEach(key => {
      if(key==='estimatedEnd'){
        const date = new Date(form.get(key)?.value);
        task.estimatedEnd = date;
      }else{
        task[key] = form.get(key)?.value;
      }
    });
    return task;
  }

  goToHome(){
    this.routerUrl.navigateByUrl('/home');
  }

}
