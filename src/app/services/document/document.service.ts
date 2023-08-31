import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Documents } from 'src/app/classes/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
private addDoc =  "http://localhost:8080/api/document/createDoc";
private getAllUrl  =  "http://localhost:8080/api/document/all";
  constructor(private http:HttpClient) {

   }
createDoc(doc:Documents):Observable<Document>{
  return this.http.post<Document>(this.addDoc,doc);
}
getAll():Observable<Documents>{
  return this.http.get<Documents>(this.getAllUrl);
}
deleteOneDoc(id:number){
  const deleteById = `http://localhost:8080/api/document/delete/${id}`
  this.http.delete(deleteById).subscribe(()=>{
    console.log("document deleted sucessfully");
  },(error)=>{
    console.log(error);
  })
}
}
