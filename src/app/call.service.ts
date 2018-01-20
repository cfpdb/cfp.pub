import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Call } from './call';
import { Target } from './target';

@Injectable()
export class CallService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getApiUrl(prefix: string, path: string): string {
    if (environment.production) {
      return `${environment.api_url}/${path}?key=${environment.api_key}`;
    } else {
      return `${prefix}/${path}`
    }
  }

  getTargets(): Promise<Target[]> {
    const url = this.getApiUrl('api', 'targets');
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Target[])
    .catch(this.handleError);
  }

  getTarget(target: string): Promise<Target> {
    const url = this.getApiUrl('api', `targets/${target}/`);
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Target)
    .catch(this.handleError);
  }

  getCalls(target: string): Promise<Call[]> {
    const url = this.getApiUrl('api', `targets/${target}/calls`);
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Call[])
    .catch(this.handleError);
  }

  getCall(target: string, year: number): Promise<Call> {
    const url = this.getApiUrl('api', `targets/${target}/${year}`);
    return this.http.get(url)
    .toPromise()
    .then(response => new Call().deserialize(response.json()))
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
