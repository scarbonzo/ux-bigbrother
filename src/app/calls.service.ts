import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallsService {
  baseUrl = 'http://cdr.api.dev.lsnj.org/api/';

  constructor(private httpClient: HttpClient) { }

  getCalls(start: Date, end: Date,
           number: string, device: string, code: string,
           take: number, skip: number) {
    let endpoint = 'v1/calls';
    endpoint = endpoint + '?start=' + start.toISOString() + '&end=' + end.toISOString();
    endpoint = endpoint + '&number=' + number + '&device=' + device + '&cause=' + code;
    endpoint = endpoint + '&take=' + take + '&skip=' + skip;
    return this.httpClient.get(this.baseUrl + endpoint);
  }
}
