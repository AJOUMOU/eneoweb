import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DialogDepartmentComponent } from 'src/app/components/dialog-department/dialog-department.component';
import { DepartmentService } from 'src/app/services/department/department.service';
import { Department } from 'src/app/classes/department';
import { QuaterService } from 'src/app/services/quater/quater.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  userdata!:User;
  department:any;
  displayedColumns: string[] = ['ID', 'NAME','ACTION']; // Add more column names as needed
 //put your data array here
dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _bottomSheet: MatBottomSheet,
    private departmentService:DepartmentService,
    private quaterService:QuaterService
    ) {
      const userStringData: any = sessionStorage.getItem('userdata');
      this.userdata = JSON.parse(userStringData);
      console.log(this.userdata);
    }
  ngOnInit(): void {
    this.departmentService.getAll().subscribe((data)=>{
      console.log(data);
      this.department = data;
      
    })
    let dataSource = new MatTableDataSource<any>([this.department]);
    dataSource.paginator = this.paginator;
    this.dataSource = dataSource.paginator;
   
  }

async deleteDepartment(id:number,dep_name:string){
  sessionStorage.setItem("dep_name",dep_name);
  console.log(id);
  console.log(dep_name)
  try {
    await this.quaterService.deleteAllByDep(dep_name);
  } catch (error) {
    console.log(error);
  }
  await this.departmentService.delete(id);

  setTimeout(()=>{
    window.location.reload();
  },0);


}

  openSheet(): void {
    this._bottomSheet.open(DialogDepartmentComponent);
  }

logOut(){}


}
