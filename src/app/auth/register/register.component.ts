import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
confirmPassword!:string;
user:User = new User();
message='the passwords are not the same';
snackConfig:MatSnackBarConfig = new MatSnackBarConfig();


  constructor(private router:Router,
    private authService:AuthService,
    private _snackBar: MatSnackBar,
  ){

  }
 
registerUser(){
  this.snackConfig.verticalPosition = "top";
  this.snackConfig.horizontalPosition = "center"

if(this.confirmPassword!=this.user.password){
 let snack =  this._snackBar.open(this.message,"ok",this.snackConfig);

  setTimeout(()=>{
    snack.dismiss();
  },2000)
}else if(this.user.name==undefined || this.user.password==undefined || this.user.address==undefined ||this.user.email==undefined || this.user.password==undefined){
let snack2 = this._snackBar.open('please enter all the fields');
setTimeout(()=>{
  snack2.dismiss()
},2000)
}else{
  this.user.role = "customer";
  this.authService.createUser(this.user).subscribe((data)=>{
    this._snackBar.open("user registration successful","",{
      duration:2000,
      panelClass:['custom-snackbar']
    })
    this.router.navigate(['/login']);
    console.log(data);

    
  })
}

}
}
