import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CallComponent } from './call.component';

const routes: Routes = [
  //{ path: '',  component: DashboardComponent },
  { path: ':call/:year', component: CallComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
