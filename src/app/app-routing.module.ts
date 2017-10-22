import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CallComponent } from './call.component';
import { HomeComponent } from './home/home.component';
import { TargetDetailComponent } from './target-detail/target-detail.component';

const routes: Routes = [
  { path: '',  component: HomeComponent, pathMatch: 'full' },
  { path: ':target', component: TargetDetailComponent },
  { path: ':call/:year', component: CallComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
