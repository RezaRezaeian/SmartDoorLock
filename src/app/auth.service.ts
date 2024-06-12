import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  founduser: boolean = false;

  constructor() {}

  public login() {
    this.founduser = true;
  }
  public logout() {
    this.founduser = false;
  }
}
