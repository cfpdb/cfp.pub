import { Component, OnInit } from '@angular/core';
import { CfpService } from '../cfp.service';
import { Venue } from '../venue';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venues: Venue[];

  constructor(private cfpService: CfpService) { }

  ngOnInit() {
    this.getVenues();
  }

  getVenues(): void {
    this.cfpService.getVenues()
      .subscribe(venues => this.venues = venues);
  }
}