import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Document } from 'src/app/classes/document';

@Component({
  selector: 'app-bottom-sheet-document',
  templateUrl: './bottom-sheet-document.component.html',
  styleUrls: ['./bottom-sheet-document.component.scss']
})
export class BottomSheetDocumentComponent {

 document:Document = new Document();
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetDocumentComponent>, ) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }


  addDocument(){}
}
