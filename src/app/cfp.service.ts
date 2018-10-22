import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Venue } from './venue';
import { Call } from './call';

@Injectable({
  providedIn: 'root'
})
export class CfpService {

  constructor(
    private http: HttpClient
  ) { }

  getVenues(): Observable<Venue[]> {
    return this.http.get<Venue[]>("/_api/venues");
  }

  getCalls(venue): Observable<Call[]> {
    return this.http.get<Call[]>(`/_api/venues/${venue}/calls`);
  }

  getCall(venue, year): Observable<Call> {
    return this.http.get<Call>(`/_api/calls/${venue}/${year}`);
  }
}
