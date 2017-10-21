import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Call } from './call';

@Injectable()
export class CallService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  //getHeroes(): Promise<Hero[]> {
  //	return this.http.get(this.heroesUrl)
  //	.toPromise()
  //	.then(response => response.json().data as Hero[])
  //	.catch(this.handleError);
  //}

  getCall(call: string, year: number): Promise<Call> {
    const url = `api/${call}/${year}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Call)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
