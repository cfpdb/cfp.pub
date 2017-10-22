import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Target }        from '../target';
import { CallService } from '../call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  targets: Target[];

  constructor(
    private callService: CallService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.callService.getTargets())
    .subscribe(targets => this.targets = targets);
  }

}
