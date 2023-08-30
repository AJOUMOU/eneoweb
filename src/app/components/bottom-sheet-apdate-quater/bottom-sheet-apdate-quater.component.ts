import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Department } from 'src/app/classes/department';
import { Quater } from 'src/app/classes/quater';
import { QuatersComponent } from 'src/app/pages/quaters/quaters.component';
import { DepartmentService } from 'src/app/services/department/department.service';
import { QuaterService } from 'src/app/services/quater/quater.service';

@Component({
  selector: 'app-bottom-sheet-apdate-quater',
  templateUrl: './bottom-sheet-apdate-quater.component.html',
  styleUrls: ['./bottom-sheet-apdate-quater.component.scss']
})
export class BottomSheetApdateQuaterComponent {
  department!: Department;
  optionsArray: string[] = [];
  quater:Quater = new Quater();
  selectedOption!: string;
  idQuater1:any;
constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetApdateQuaterComponent>,
  private dapartmentService: DepartmentService,
  private quaterService:QuaterService
  ){
  this.dapartmentService.getAll().subscribe((data) => {
    for (let i = 0; i < data.length; i++) {
      this.department = data[i];
      console.log(this.department.department_name)
      this.optionsArray.push(this.department.department_name);
    }
    console.log(this.optionsArray);
  });
  async function getSessionStorageItem(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(()=>{
          const value = sessionStorage.getItem(key);
          resolve(value);
        },100)
      
      } catch (error) {
        reject(error);
      }
    });
  }
  
  (async () => {
    try {
      const value = await getSessionStorageItem("idQuater");
      this.idQuater1 = value
      // console.log("this is the quaterid"+this.quater.id);
      // Use the retrieved value
    } catch (error) {
      console.error('Error retrieving value from session storage:', error);
    }
  })();

  // this.idQuater1 = QuatersComponent.quaterId;
  // console.log(this.idQuater1);
}



openLink(event: MouseEvent): void {
  this._bottomSheetRef.dismiss();
  event.preventDefault();
}
  updateQuater(){
    this.quater.dep = this.selectedOption;
 this.quaterService.updateQuater(this.idQuater1,this.quater).subscribe((data)=>{
  console.log(data);
  location.reload();
 })
  }
}
