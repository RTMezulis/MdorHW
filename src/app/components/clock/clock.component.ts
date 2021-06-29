import {Component, OnInit} from '@angular/core';
import {Observable, timer} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  Time?: Observable<Date>

  constructor() { }

  ngOnInit(): void {
  this.Time = timer(0, 1000).pipe(
    map(() => {
      return new Date()
    })
  )}
}



