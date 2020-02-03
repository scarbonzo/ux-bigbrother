import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://adusers.api.dev.lsnj.org/v1/';

  constructor(private httpClient: HttpClient) { }

  getPrograms() {
    return this.httpClient.get(this.baseUrl + 'programs/');
  }

  getAllUsers() {
    return this.httpClient.get(this.baseUrl + 'users/');
  }

  getUsers(program: string) {
    return this.httpClient.get(this.baseUrl + 'programs/' + program);
  }
}
