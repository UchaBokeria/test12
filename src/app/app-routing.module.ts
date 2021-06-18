import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodolistComponent } from './pages/todolist/todolist.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TaskdetailsComponent } from './pages/taskdetails/taskdetails.component';
import { AlltasksComponent } from './pages/alltasks/alltasks.component';
import { FilterComponent } from './pages/filter/filter.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: "ToDoList",
    component: TodolistComponent,
    children: [
    { path: "Allproduct/:date", component: AlltasksComponent },
    { path: "Filter/:category", component: FilterComponent },
    { path: "Search/:keyword", component: SearchComponent },
    { path: "", redirectTo: "Allproduct", pathMatch: "full" },
    { path: "**", component: AlltasksComponent }
    ]
  },
  {
    path: "Projects",
    component: ProjectsComponent
  },
  {
    path: "Calendar",
    component: CalendarComponent,
    children: [
      { path: "Allproduct", component:AlltasksComponent }
    ]
  },
  {
    path: "Settings",
    component: SettingsComponent
  },
  {
    path: "",
    redirectTo: "ToDoList",
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
