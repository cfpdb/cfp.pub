import { Component, OnInit, Input } from '@angular/core';
import { CallLocation } from '../call';

@Component({
  selector: 'call-location',
  templateUrl: './call-location.component.html',
  styleUrls: ['./call-location.component.css']
})
export class CallLocationComponent implements OnInit {
  @Input() location: CallLocation;

  constructor() {
  }

  ngOnInit() {
  }

}
