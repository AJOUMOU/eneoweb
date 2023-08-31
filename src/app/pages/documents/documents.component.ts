import { Component, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { User } from 'src/app/classes/user';
import { BottomSheetDocumentComponent } from 'src/app/components/bottom-sheet-document/bottom-sheet-document.component';
import { DocumentService } from 'src/app/services/document/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  document:any;
  userdata!:User;
  displayedColumns: string[] = ['ID', 'NAME','ACTION']; // Add more column names as needed
 //put your data array here
dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _bottomSheet: MatBottomSheet,
    private documentService:DocumentService
    
    ) {
      const userStringData: any = sessionStorage.getItem('userdata');
      this.userdata = JSON.parse(userStringData);
      console.log(this.userdata);

      this.documentService.getAll().subscribe((data)=>{
        console.log(data);
        this.document = data;
      })
    }




    openSheet(): void {
      this._bottomSheet.open(BottomSheetDocumentComponent);
    }

    deleteDocument(id:number){
      this.documentService.deleteOneDoc(id);
      setTimeout(() => {
        location.reload();
      },2000);

    }
    logOut(){}
}
