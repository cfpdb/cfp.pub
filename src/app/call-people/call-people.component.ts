import { Component, OnInit, Input } from '@angular/core';
import { People } from '../call';

@Component({
  selector: 'call-people',
  templateUrl: './call-people.component.html',
  styleUrls: ['./call-people.component.css']
})
export class CallPeopleComponent implements OnInit {
  @Input() people: People[];

  constructor() { }

  ngOnInit() {
  }

}
