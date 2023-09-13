import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {TasksComponent} from "./tasks/tasks.component";

import {ManagerComponent} from "./manager/manager.component";

import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: 'tasks', component: TasksComponent
  },
  {
    path: 'manager', component: ManagerComponent
  },
  {
    path: '', redirectTo: '/tasks', pathMatch: 'full'
  },
  {
    path:'login',component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
