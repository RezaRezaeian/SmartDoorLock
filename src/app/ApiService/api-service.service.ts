import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,shareReplay } from 'rxjs';
import { User } from '../interface/app.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  constructor(private http: HttpClient) { }
  private apiURL: string= 'https://localhost:7135/api/Users'

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiURL);
  }
  postUser(newUser:User):Observable<User>{
    return this.http.post<User>(this.apiURL, newUser);
  }
  deleteUser(id:Number):Observable<User>{
    return this.http.delete<User>(`${this.apiURL}/${id}`);
  }
  
}
