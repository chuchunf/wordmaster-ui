import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loginUser: User = null;

  constructor(private http: HttpClient) {
  }

  public login(username: String, password: String) {
    if ( this.loginUser == null ) {
    }
    return this.loginUser;
  }

  public getUser() {
    return this.loginUser;
  }
}
