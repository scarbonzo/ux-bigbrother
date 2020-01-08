import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private baseUrl = 'http://events.api.dev.lsnj.org/';

  constructor(private httpClient: HttpClient) { }

  getEvents(start: Date, end: Date,
            machine: string, username: string,
            startups: boolean, shutdowns: boolean, crashes: boolean, renames: boolean,
            logons: boolean, logoffs: boolean, locks: boolean, unlocks: boolean,
            take: number, skip: number) {
    let endpoint = 'v1/events/';
    endpoint = endpoint + '?machine=' + machine + '&username=' + username;
    endpoint = endpoint + '&start=' + start.toISOString() + '&end=' + end.toISOString();
    endpoint = endpoint + '&startups=' + startups + '&shutdowns=' + shutdowns + '&crashes=' + crashes + '&renames=' + renames;
    endpoint = endpoint + '&logons=' + logons + '&logoffs=' + logoffs + '&locks=' + locks + '&unlocks=' + unlocks;
    endpoint = endpoint + '&take=' + take + '&skip=' + skip;
    return this.httpClient.get(this.baseUrl + endpoint);
  }

  getBasicEvents(start: Date, end: Date,
                 search: string,
                 take: number, skip: number) {
    let endpoint = 'v2/events/';
    endpoint = endpoint + '?search=' + search;
    endpoint = endpoint + '&start=' + start.toISOString() + '&end=' + end.toISOString();
    endpoint = endpoint + '&startups=' + 'true' + '&shutdowns=' + 'true' + '&crashes=' + 'true' + '&renames=' + 'true';
    endpoint = endpoint + '&logons=' + 'true' + '&logoffs=' + 'true' + '&locks=' + 'true' + '&unlocks=' + 'true';
    endpoint = endpoint + '&take=' + take + '&skip=' + skip;
    return this.httpClient.get(this.baseUrl + endpoint);
  }
}
