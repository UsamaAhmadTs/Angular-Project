import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {TasksComponent} from "./tasks/tasks.component";

import {ManagerComponent} from "./manager/manager.component";

const routes: Routes = [
  {
    path: 'tasks', component: TasksComponent
  },
  {
    path: 'manager', component: ManagerComponent
  },
  {
    path: '', redirectTo: '/tasks', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
