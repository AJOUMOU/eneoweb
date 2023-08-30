import { Component, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { BottomSheetDocumentComponent } from 'src/app/components/bottom-sheet-document/bottom-sheet-document.component';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  department:any;
  displayedColumns: string[] = ['ID', 'NAME','ACTION']; // Add more column names as needed
 //put your data array here
dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _bottomSheet: MatBottomSheet,
    
    ) {}




    openSheet(): void {
      this._bottomSheet.open(BottomSheetDocumentComponent);
    }

    deleteDocument(id:number){}
    logOut(){}
}
