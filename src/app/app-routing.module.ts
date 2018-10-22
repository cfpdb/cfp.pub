import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenuesComponent } from './venues/venues.component';
import { VenueComponent } from './venue/venue.component';
import { CallComponent } from './call/call.component';

const routes: Routes = [
  { path: '', component: VenuesComponent },
  { path: ':venue', component: VenueComponent },
  { path: ':venue/:year', component: CallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
