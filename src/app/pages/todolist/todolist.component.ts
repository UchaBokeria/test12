import { Component, OnInit } from '@angular/core';
import { GetTasksService } from '../../get-tasks.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodolistComponent implements OnInit {
  category = ["Cat1","Cat2","Cat3","Cat4","Cat5"];
  sorting = false;
  sortingDrop = "";
  editMode = false;
  createNew = false;

  Tasks;
  checkAll = false;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {}


  CheckAll(){
    for (let i = 0; i < this.Tasks.length; i++)
      this.Tasks[i].done = false;

    for (let i = 0; i < this.Tasks.length; i++)
      this.Tasks[i].done = this.checkAll;

    this.checkAll = !this.checkAll;
  }
  Done(){}
  Undone(){}
  Clear(){}
  sort(){}
  search(value){
    var keyword = value.keyword;
    this.router.navigate(['Search',keyword],{ relativeTo: this.route });
  }
}
