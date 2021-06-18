import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetTasksService {
  // link = 'http://localhost/taskAPI/taskApi.php?API_KEY=bae7b908-f12f-487b-96c7-47a696582aa4';
  link = 'https://udapis.000webhostapp.com/API/post/read.php?API_KEY=bae7b908-f12f-487b-96c7-47a696582aa4';

  tasksQuant = this.link + "&countByDate=";
  title = this.link + "&title=";

  constructor(private Http:HttpClient) { }

  getAll(){
    return this.Http.get(this.link);
  }

  getQuant(date){
    return this.Http.get(this.tasksQuant + date);
  }

  getByTitle(keyword){
    return this.Http.get(this.title + keyword);
  }

  // tasks = [
  //    {id:1,title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
  //    {id:2,title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
  //    {id:3,title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
  //    {id:4,title:"Workout",description:" Lorem tu ragac",done:true,starts:"02:35",ends:"03:35"}
  //  ];
}
