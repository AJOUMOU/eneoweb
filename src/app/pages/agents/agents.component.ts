import { Component, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent {
  employee:any;
  public static quaterId:number;
    displayedColumns: string[] = ['NAME', 'Department','ACTION']; // Add more column names as needed
   //put your data array here
  dataSource:any;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    constructor(private _bottomSheet: MatBottomSheet) {
    
    }


    openSheet(): void {
      this._bottomSheet.open(AgentsComponent);
    }
    updateSheet(quater_id:number): void {
     
    }
    deleteUser(id:number){}
  
  logOut(){}
  
}
