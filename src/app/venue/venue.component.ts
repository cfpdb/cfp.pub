import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CfpService } from '../cfp.service';
import { Call } from '../call';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  calls: Call[];

  constructor(
    private route: ActivatedRoute,
    private cfpService: CfpService,
    private location: Location
    ) { }
    
    ngOnInit() {
      this.getCalls();
    }
    
  getCalls(): void {
    const venue = this.route.snapshot.paramMap.get("venue");
    this.cfpService.getCalls(venue)
      .subscribe(calls => this.calls = calls);
  }
}
