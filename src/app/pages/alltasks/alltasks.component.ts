import { Component, OnInit } from '@angular/core';
import { GetTasksService } from '../../get-tasks.service';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.sass']
})
export class AlltasksComponent implements OnInit {


  tasks;
  constructor(private Task:GetTasksService) { }

  ngOnInit(): void {
    this.Task.getAll().subscribe( (data:any) => {
      this.tasks = data;
      console.log(data);
    });
  }
  remove(id){

  }

}
