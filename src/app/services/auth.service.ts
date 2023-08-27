import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private createUserurl = "http://localhost:8080/api/user/register";
  constructor(private http:HttpClient) { 
  }

createUser(user:User):Observable<User>{
  return this.http.post<User>(this.createUserurl,user);
}
login(credentials: any){
  return this.http.post<any>("http://localhost:8080/api/user/auth/login",credentials);
}
}
