import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findByemail(email: string) {
    const findByemailUrl = `http://localhost:8080/api/user/email/${email}`
    return this.http.get(findByemailUrl);
  }
}
