import { Component, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { Data } from '@angular/router';
import { User } from 'src/app/classes/user';
import { BottomSheetAgentsComponent } from 'src/app/components/bottom-sheet-agents/bottom-sheet-agents.component';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent {
  agents:any;
  userdata!: User;
  public static quaterId:number;
    displayedColumns: string[] = ['NAME', 'Department','phone_nr','ACTION']; // Add more column names as needed
   //put your data array here
  dataSource:any;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    constructor(private _bottomSheet: MatBottomSheet,
      private authService:AuthService,
      private userService:UserService) {

        const userStringData: any = sessionStorage.getItem('userdata');
        this.userdata = JSON.parse(userStringData);
        console.log(this.userdata);

    this.authService.getallUser().subscribe((data)=>{
   const agentsArray:any = data.filter((obj:any)=>obj.role==="Agents")
     console.log(agentsArray);
     this.agents = agentsArray;

    })
    }


    openSheet(): void {
      this._bottomSheet.open( BottomSheetAgentsComponent);
    }
  
    deleteAgent(id:number){
      this.userService.deleteUser(id);
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  logOut(){}
  
}
