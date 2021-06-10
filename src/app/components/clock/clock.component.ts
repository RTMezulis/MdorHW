import { Component, OnInit } from '@angular/core';
import {timer} from "rxjs";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  Time?: Date

  constructor() { }

  ngOnInit(): void {
  timer(0, 1000).subscribe(() => {
    this.Time = new Date()
  })
  }

}
