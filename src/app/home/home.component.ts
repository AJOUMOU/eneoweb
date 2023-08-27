import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ViewUserBottomSheetComponent } from '../components/view-user-bottom-sheet/view-user-bottom-sheet.component';
import { Router } from '@angular/router';
import { User } from '../classes/user';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  buttons?: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'ajoumou', weight: 1.0079, symbol: 'H', buttons: 'true' },
  { position: 2, name: 'brandon', weight: 4.0026, symbol: 'He', buttons: 'true' },
  { position: 3, name: 'liliane', weight: 6.941, symbol: 'Li', buttons: 'true' },
  { position: 4, name: 'michelle', weight: 9.0122, symbol: 'Be', buttons: 'true' },
  { position: 5, name: 'Linda', weight: 10.811, symbol: 'B', buttons: 'true' },
  { position: 6, name: 'leaticia', weight: 12.0107, symbol: 'C', buttons: 'true' },
  { position: 7, name: 'eliane', weight: 14.0067, symbol: 'N', buttons: 'true' },
  { position: 8, name: 'ratio', weight: 15.9994, symbol: 'O', buttons: 'true' },
  { position: 9, name: 'jeff', weight: 18.9984, symbol: 'F', buttons: 'true' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', buttons: 'true' },];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'buttons'];
  dataSource = ELEMENT_DATA;
  userdata!: User;


  constructor(private _bottomSheet: MatBottomSheet, private router: Router) {
    const userStringData: any = sessionStorage.getItem('userdata');
    this.userdata = JSON.parse(userStringData);
    console.log(this.userdata);

  }
  openBottomSheet(): void {
    this._bottomSheet.open(ViewUserBottomSheetComponent);
  }

  navigate(navUrl: string) {
    this.router.navigate([navUrl])
  }

  logOut() {

  }
}
