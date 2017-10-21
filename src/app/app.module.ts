import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CallComponent } from './call.component';
import { CallService } from './call.service';
import { CallImportantDatesComponent } from './call-important-dates/call-important-dates.component';

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    CallImportantDatesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
