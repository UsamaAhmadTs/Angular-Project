import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {TasksComponent} from './tasks/tasks.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule} from "@angular/forms";

import {ContainerComponent} from './container/container.component';

import {ManagerComponent} from './manager/manager.component';

import {HttpClientModule} from "@angular/common/http";

import {AppNavComponent} from './app-nav/app-nav.component';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list';

import {TaskArrayComponent} from "./taskArray/taskArray.component";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskArrayComponent,
    ContainerComponent,
    ManagerComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
