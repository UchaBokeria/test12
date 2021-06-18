import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  result = "0";
  constructor(private route:ActivatedRoute) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (data)=>{
      this.result = data.get("category");
    })
  }

}
