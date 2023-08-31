import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetQuatersComponent } from '../bottom-sheet-quaters/bottom-sheet-quaters.component';
import { User } from 'src/app/classes/user';
import { DepartmentService } from 'src/app/services/department/department.service';
import { Department } from 'src/app/classes/department';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bottom-sheet-agents',
  templateUrl: './bottom-sheet-agents.component.html',
  styleUrls: ['./bottom-sheet-agents.component.scss']
})
export class BottomSheetAgentsComponent {
  user :User = new User();
  department!:Department;
  optionsArray: string[] = [];
  confirmPassword!:string;

  message='the passwords are not the same';
snackConfig:MatSnackBarConfig = new MatSnackBarConfig();

  selectedOption!: string;
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetAgentsComponent>, 
  private dapartmentService:DepartmentService,
  private router:Router,
    private authService:AuthService,
    private _snackBar: MatSnackBar,
  ) {
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
 
  }
  addAgent(){
    this.snackConfig.verticalPosition = "top";
    this.snackConfig.horizontalPosition = "center"
    this.user.department = this.selectedOption;
  
  if(this.confirmPassword!=this.user.password){
   let snack =  this._snackBar.open(this.message,"ok",this.snackConfig);
  
    setTimeout(()=>{
      snack.dismiss();
    },2000)
  }else if(this.user.name==undefined || this.user.password==undefined||this.user.email==undefined || this.user.password==undefined ||this.user.department==undefined){
  let snack2 = this._snackBar.open('please enter all the fields');
  setTimeout(()=>{
    snack2.dismiss()
  },2000)
  }else{
    this.user.role = "Agents";
    this.authService.createUser(this.user).subscribe((data)=>{
      this._snackBar.open("user Added successfully","",{
        duration:2000,
        panelClass:['custom-snackbar']
      })
      console.log(data);
    setTimeout(()=>{
      location.reload();
    },3000)
  
      
    })
  }
  
  }
  }

