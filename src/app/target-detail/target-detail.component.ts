import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Call } from '../call';
import { Target } from '../target';
import { CallService } from '../call.service';

@Component({
  selector: 'app-target-detail',
  templateUrl: './target-detail.component.html',
  styleUrls: ['./target-detail.component.css']
})
export class TargetDetailComponent implements OnInit {
  target: Target;
  calls: Call[];

  constructor(
    private callService: CallService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.callService.getTarget(params.get('target')))
      .subscribe(target => this.target = target);
    this.route.paramMap
      .switchMap((params: ParamMap) => this.callService.getCalls(params.get('target')))
      .subscribe(calls => this.calls = calls);
  }
}
