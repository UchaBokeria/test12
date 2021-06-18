import { Component, OnInit } from '@angular/core';
import { GetTasksService } from '../../get-tasks.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})

export class CalendarComponent implements OnInit {
  days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Satarday","Sunday"];
  months = ["January","February","March","April","May","June","July",
                    "August","September","October","November","December"];

  showDayList = false;

  weeks = [
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""]
  ];
  weeksDisplay = 6;

  taskQuant = Array(this.weeksDisplay * 7);

  monthIndicator = new Date().getMonth();
  yearIndicator = new Date().getFullYear();

  Today = { row: 0 , col: 0 };
  Title = { date: 0, day: "", month: ""};
  Current = { Month: 0, Year: 0, ShowToday : true };

  monthStart = 0;

  constructor(private Task:GetTasksService) {}
  ngOnInit(): void {
    this.Current.Month = this.monthIndicator;
    this.Current.Year = this.yearIndicator;
    this.build(); // creates calendar display
  }


  build(){
    // FULL DATE OF TODAY FOR TITLES
    this.Title.date = new Date().getDate();
    this.Title.day = this.days[new Date().getDay()];
    this.Title.month = this.months[this.monthIndicator];

    this.monthStart = 0;

    var firstDate = new Date(this.yearIndicator, this.monthIndicator, 1);
    var lastDate = new Date(this.yearIndicator, this.monthIndicator + 1, 0);

    var lastNum = Number(lastDate.getDate()); // 31 || 30 ending of month

    var firstDay;
    var ind = 1;

    (firstDate.getDay() == 0) ?  // make monday first day in a week
    firstDay = 6:
    firstDay = firstDate.getDay()-1;

    for (let week = 0; week < this.weeks.length; week++) {
      for (let days = 0; days < 7; days++) {
        if(ind > lastNum) // reset if its last day of month
          ind = 1;


        if(this.Today.row == 0 && this.Today.col == 0){ // if today date num is twice in a month
          if(new Date().getDate() == ind){ // than find today
            this.Today.row = week;
            this.Today.col = days;
          }
        }

        if(days < firstDay && week == 0){ // filler for days before 1st one in curr month
          this.monthStart++;
          (lastNum == 31) ?
          this.weeks[week][days]= (30 - (firstDay-days-1)).toString():
          this.weeks[week][days]= (31 - (firstDay-days-1)).toString();
          continue;
        }

        this.weeks[week][days]=ind.toString();
        ind++;
      }
    }

    // Dont show Today class if this month is not displayed
    (this.Current.Month == this.monthIndicator &&
    this.Current.Year == this.yearIndicator ) ?
    this.Current.ShowToday = true : this.Current.ShowToday = false;

    this.tasksCounter(); // get tasks quantrities for each day
  }

  prevMonth(){
    if(this.monthIndicator > 0)
      this.monthIndicator--;
    else{
      this.yearIndicator--;
      this.monthIndicator = 11;
    }
    this.build();
  }

  nextMonth(){
    if(this.monthIndicator < 11)
      this.monthIndicator++;
    else{
      this.yearIndicator++;
      this.monthIndicator = 0
    }
    this.build();
  }

  tasksCounter(){
    this.taskQuant = Array(this.weeksDisplay * 7);

    // plus 1 & convert choosen month to string
    var month = (this.monthIndicator + 1).toString();
    if(this.monthIndicator < 9) // (fixed 1 -> 01)
      var month = "0" + month;

    for (let i = 1; i <= this.weeksDisplay * 7; i++) {

      var starter = i - this.monthStart + 1;

      var day = (i <= 9) ? "0" + starter : starter.toString(); // (fixed 1 -> 01)
      var date = this.yearIndicator + "-" + month + "-" + day;
      this.Task.getQuant(date).subscribe( (taskCount:any) => {
        this.taskQuant[i]=taskCount;
      });
    }
  }
}
