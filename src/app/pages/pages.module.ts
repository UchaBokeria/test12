import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { TodolistComponent } from './todolist/todolist.component';
import { ProjectsComponent } from './projects/projects.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { AlltasksComponent } from './alltasks/alltasks.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [TodolistComponent, ProjectsComponent, CalendarComponent,
                 SettingsComponent, NotfoundComponent, TaskdetailsComponent,
                 AlltasksComponent, FilterComponent, SearchComponent, NewComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    TodolistComponent,
    ProjectsComponent,
    CalendarComponent,
    SettingsComponent,
    NotfoundComponent,
    TaskdetailsComponent,
    AlltasksComponent,
    FilterComponent,
    SearchComponent
  ]
})
export class PagesModule { }
