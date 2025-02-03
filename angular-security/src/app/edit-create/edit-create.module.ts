import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EditTaskComponent } from './conteiner/edit-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  PresenterEditCreateComponent } from './presenter/presenter.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EditTaskComponent,
    PresenterEditCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: EditTaskComponent}
    ])
  ]
})
export class EditCreateModule { }
