import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Department } from 'src/app/classes/department';
import { Quater } from 'src/app/classes/quater';
import { DepartmentService } from 'src/app/services/department/department.service';
import { QuaterService } from 'src/app/services/quater/quater.service';

@Component({
  selector: 'app-bottom-sheet-quaters',
  templateUrl: './bottom-sheet-quaters.component.html',
  styleUrls: ['./bottom-sheet-quaters.component.scss']
})
export class BottomSheetQuatersComponent {
  department!: Department;
  optionsArray: string[] = [];
  quater:Quater = new Quater();
  selectedOption!: string;
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetQuatersComponent>, 
    private dapartmentService: DepartmentService,
    private quaterService:QuaterService) {
    this.dapartmentService.getAll().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.department = data[i];
        console.log(this.department.department_name)
        this.optionsArray.push(this.department.department_name);
      }
      console.log(this.optionsArray);
    });
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  addQuater() { 
    this.quater.dep = this.selectedOption
    console.log(this.quater)
    this.quaterService.addQuater(this.quater).subscribe((data)=>{
      console.log(data)
      setTimeout(()=>{
        location.reload();
      },0)
    })
  }
}
