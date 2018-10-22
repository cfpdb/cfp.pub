import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CfpService } from '../cfp.service';
import { Call } from '../call';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {

  call: Call;

  constructor(
    private route: ActivatedRoute,
    private cfpService: CfpService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCall();
  }

  getCall(): void {
    const year = this.route.snapshot.paramMap.get("year");
    const venue = this.route.snapshot.paramMap.get("venue");
    this.cfpService.getCall(venue, year)
      .subscribe(call => this.call = call);
  }
}
