import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  transform(value: any):number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())

    var dateDifference = Math.abs(value - todayWithNoTime)

    const secondsInDay = 86400;

    var dateDifferenceSeconds = dateDifference * 0.001;
    
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
