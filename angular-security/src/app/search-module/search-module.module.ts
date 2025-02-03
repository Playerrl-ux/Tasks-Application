import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatsDatePresenterComponent } from './home-page/presenter/stats-date-presenter/stats-date-presenter.component';
import { TitlePresenterComponent } from './home-page/presenter/title-presenter/title-presenter.component';
import { SharedModule } from '../shared/shared.module';
import { SquareComponent } from './home-page/conteiner/square/square.component';
import { TaskTitleComponent } from './home-page/conteiner/task-title/task-title.component';
import { SearchDateStatsComponent } from './home-page/conteiner/search-date-stats/search-date-stats.component';
import { FullTaskComponent } from './home-page/presenter/full-task/full-task.component';
import { SearchTitleComponent } from './home-page/conteiner/search-title/search-title.component';
import { HomeComponent } from './home-page/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StatsDatePresenterComponent,
    SearchDateStatsComponent,
    TitlePresenterComponent,
    SquareComponent,
    TaskTitleComponent,
    FullTaskComponent,
    SearchTitleComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '',  component: HomeComponent}
    ])
  ]
})
export class SearchModuleModule { }
