import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTasksService } from '../../get-tasks.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit, OnDestroy {
  tasks = [];
  keyword;
  sub:any;
  constructor(private Task:GetTasksService, private router:ActivatedRoute) {
    this.sub = this.router.paramMap.subscribe( (data)=>{
      this.keyword = data.get("keyword");

      if(this.keyword == ""){
        this.Task.getAll().subscribe( (data:any) => {
          this.tasks = data;
          console.log(data);
        });
      }
      else {
        this.Task.getByTitle(this.keyword).subscribe( (data:any) => {
          this.tasks = data;
          console.log(data);
        });
      }

    });
  }
  remove(x){}
  editMode = false;

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
