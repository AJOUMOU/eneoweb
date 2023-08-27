import { Component } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-view-user-bottom-sheet',
  templateUrl: './view-user-bottom-sheet.component.html',
  styleUrls: ['./view-user-bottom-sheet.component.scss']
})
export class ViewUserBottomSheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<ViewUserBottomSheetComponent>) {}
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
