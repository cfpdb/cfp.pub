import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NguiMapModule} from '@ngui/map';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CallComponent } from './call.component';
import { CallService } from './call.service';
import { CallImportantDatesComponent } from './call-important-dates/call-important-dates.component';
import { HomeComponent } from './home/home.component';
import { TargetDetailComponent } from './target-detail/target-detail.component';
import { CallLocationComponent } from './call-location/call-location.component';

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    CallImportantDatesComponent,
    HomeComponent,
    TargetDetailComponent,
    CallLocationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyC_n5ONKh56EAUHKCPhdou5qcxZLY-s17M'})
  ],
  providers: [CallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
