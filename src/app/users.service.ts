import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://adusers.api.lsnj.org/api/v1/adusers/';

  constructor(private httpClient: HttpClient) { }

  getPrograms() {

  }

  getUsers(program: string) {

  }
}
