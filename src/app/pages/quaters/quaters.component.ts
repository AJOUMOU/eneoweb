import { Component, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { User } from 'src/app/classes/user';
import { BottomSheetApdateQuaterComponent } from 'src/app/components/bottom-sheet-apdate-quater/bottom-sheet-apdate-quater.component';
import { BottomSheetQuatersComponent } from 'src/app/components/bottom-sheet-quaters/bottom-sheet-quaters.component';
import { QuaterService } from 'src/app/services/quater/quater.service';

@Component({
  selector: 'app-quaters',
  templateUrl: './quaters.component.html',
  styleUrls: ['./quaters.component.scss']
})
export class QuatersComponent {
quaters:any;
userdata!:User
public static quaterId:number;
  displayedColumns: string[] = ['NAME', 'Department','ACTION']; // Add more column names as needed
 //put your data array here
dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _bottomSheet: MatBottomSheet, private quaterService:QuaterService) {

    const userStringData: any = sessionStorage.getItem('userdata');
    this.userdata = JSON.parse(userStringData);
    console.log(this.userdata);


    this.quaterService.getAllQuater().subscribe((data)=>{
console.log(data);
this.quaters = data;
    })
  }
  ngOnInit(): void {
   
  }

deleteQuaters(id:number){
  this.quaterService.deleteById(id);
 setTimeout(() => {
  location.reload();
 }, 0);
}

  openSheet(): void {
    this._bottomSheet.open(BottomSheetQuatersComponent);
  }
  updateSheet(quater_id:number): void {
    this._bottomSheet.open(BottomSheetApdateQuaterComponent);
    
    QuatersComponent.quaterId = quater_id;
    console.log(QuatersComponent.quaterId);
    sessionStorage.setItem("idQuater",JSON.stringify(quater_id))
  }

logOut(){}

}
