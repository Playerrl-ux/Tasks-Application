import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenterLoginComponent } from './login/presenter/presenter.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/conteiner/login.component';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from '../search-module/home-page/home.component';
import { EditCreateModule } from '../edit-create/edit-create.module';



@NgModule({
  declarations: [
    PresenterLoginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '',  component: LoginComponent}
    ])
  ]
})
export class LoginModule { }
