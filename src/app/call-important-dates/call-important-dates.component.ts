import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Call } from '../call';

@Component({
  selector: 'call-important-dates',
  templateUrl: './call-important-dates.component.html',
  styleUrls: ['./call-important-dates.component.css']
})
export class CallImportantDatesComponent implements OnInit {
  @Input() call: Call;

  constructor() { }

  ngOnInit() {
  }

}
