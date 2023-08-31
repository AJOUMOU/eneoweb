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
    const findByemailUrl = `http://localhost:8080/api/user/email/${email}`;
    return this.http.get(findByemailUrl);
  }
  deleteUser(id:number){
    const deleteOneUrl = `http://localhost:8080/api/user/${id}`;
  this.http.delete(deleteOneUrl).subscribe(()=>{
    console.log("the user has successfuly be deleted")
  },(error)=>{
    console.log(error);
  }
  )
  }
}
