import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './login/authentication/guard/auth.guard';
import { HomeComponent } from './search-module/home-page/home.component';
import { LoginModule } from './login/login.module';
import { EditCreateModule } from './edit-create/edit-create.module';
import { LoginComponent } from './login/login/conteiner/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { 
    path: 'home', 
    loadChildren: () => import('./search-module/search-module.module').then(m => m.SearchModuleModule),
    canActivate: [authGuard] 
  },
  { 
    path: 'create-task', 
    loadChildren: () => import('./edit-create/edit-create.module').then(m => m.EditCreateModule),
    canActivate: [authGuard]  
  },
  { 
    path: 'edit-task/:title', 
    loadChildren: () => import('./edit-create/edit-create.module').then(m => m.EditCreateModule),
    canActivate: [authGuard] 
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
