import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/classes/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
private addDepartmentUrl = "http://localhost:8080/api/department/add";
private getDepartmentUrl = "http://localhost:8080/api/department/findall";
;
  constructor(private http:HttpClient) { }


addDepartment(department:Department):Observable<Department>{
  return this.http.post<Department>(this.addDepartmentUrl,department);
}
getAll():Observable<any>{
  return this.http.get<any>(this.getDepartmentUrl);
}
delete(id : number){
  const deleteDepartmentUrl = `http://localhost:8080/api/department/delete/${id}`
  this.http.delete(deleteDepartmentUrl).subscribe(()=>{
console.log("successful delete of item")
  },
  (error)=>{
    console.error("fail to do it")
  })

}

}
