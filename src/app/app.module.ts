import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { NguiMapModule} from '@ngui/map';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CallComponent } from './call.component';
import { CallService } from './call.service';
import { CallImportantDatesComponent } from './call-important-dates/call-important-dates.component';
import { HomeComponent } from './home/home.component';
import { TargetDetailComponent } from './target-detail/target-detail.component';
import { CallLocationComponent } from './call-location/call-location.component';
import { CallPeopleComponent } from './call-people/call-people.component';

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    CallImportantDatesComponent,
    HomeComponent,
    TargetDetailComponent,
    CallLocationComponent,
    CallPeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBm82LLA1y0eai-5ZrQGEFD27lxOxUgU54'})
  ],
  providers: [CallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
