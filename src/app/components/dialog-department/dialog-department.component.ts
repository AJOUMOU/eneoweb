import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Department } from 'src/app/classes/department';
import { DepartmentService } from 'src/app/services/department/department.service';

@Component({
  selector: 'app-dialog-department',
  templateUrl: './dialog-department.component.html',
  styleUrls: ['./dialog-department.component.scss']
})
export class DialogDepartmentComponent {
  department: Department = new Department();
  constructor(private _bottomSheetRef: MatBottomSheetRef<DialogDepartmentComponent>, private departmentService: DepartmentService) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  addDepartment() {
    this.departmentService.addDepartment(this.department).subscribe((data) => {
      console.log(data);
      setTimeout(()=>{
        window.location.reload();
      },0)
   
    })
  }
}