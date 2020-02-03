import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HdrService {
  private baseUrl = 'http://cdr.api.dev.lsnj.org/api/';

  constructor(private httpClient: HttpClient) { }

  getMonthReport(year: number, month: number) {
    return this.httpClient.get(this.baseUrl + 'v1/summary?year=' + year + '&month=' + month);
  }

  getReport(start: Date, end: Date) {
    return this.httpClient.get(this.baseUrl + 'v2/summary?start=' + start.toISOString() + '&end=' + end.toISOString());
  }
}
