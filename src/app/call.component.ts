import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Call }        from './call';
import { CallService } from './call.service';

@Component({
  selector: 'call',
  templateUrl: './call.component.html',
  styleUrls: [ './call.component.css' ]
})
export class CallComponent implements OnInit {
  call: Call;

  constructor(
    private callService: CallService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.callService.getCall(
      params.get('call'), +params.get('year')))
    .subscribe(call => this.call = call);
  }

  //goBack(): void {
  //	this.location.back();
  //}
}
