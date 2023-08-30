import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quater } from 'src/app/classes/quater';

@Injectable({
  providedIn: 'root'
})
export class QuaterService {
private addQuaterUrl = "http://localhost:8080/api/quater/add";
private getAll =  "http://localhost:8080/api/quater/findAll";

  constructor(private http:HttpClient) { }
  addQuater(quater:Quater): Observable<any>{
    return this.http.post<any>(this.addQuaterUrl,quater);
  }
  getAllQuater():Observable<Quater>{
    return this.http.get<Quater>(this.getAll);
  }
  updateQuater(id:number,quater:Quater):Observable<Quater>{
    const updateQuater = `http://localhost:8080/api/quater/update/${id}`;
    return this.http.put<Quater>(updateQuater,quater);
  }
  deleteAllByDep(dep:string):Promise<any>{
    const deleteByDep = `http://localhost:8080/api/quater/DBDN/all/${dep}`;
    return this.http.delete(deleteByDep).toPromise();
  }
  deleteById(id:number){
    const deleteQuaters = `http://localhost:8080/api/quater/delete/${id}`;
    this.http.delete(deleteQuaters).subscribe(()=>{
      console.log("quater has successfully be deleted");
    })
  }
}
