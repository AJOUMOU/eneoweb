import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Documents } from 'src/app/classes/document';
import { DocumentService } from 'src/app/services/document/document.service';

@Component({
  selector: 'app-bottom-sheet-document',
  templateUrl: './bottom-sheet-document.component.html',
  styleUrls: ['./bottom-sheet-document.component.scss']
})
export class BottomSheetDocumentComponent {

 document:Documents = new Documents();
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetDocumentComponent>,
    private documentService:DocumentService ) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }


  addDocument(){
    this.documentService.createDoc(this.document).subscribe((data)=>{
      console.log(data)
      setTimeout(() => {
        location.reload();
      }, 3000);
    });
  }
}
