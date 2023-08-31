import { Component, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { User } from 'src/app/classes/user';
import { BottomSheetDirectorsComponent } from 'src/app/components/bottom-sheet-directors/bottom-sheet-directors.component';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent {
  userdata: User;
  directors: any;
  public static quaterId: number;
  displayedColumns: string[] = ['NAME', 'Department', 'ACTION']; // Add more column names as needed
  //put your data array here
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _bottomSheet: MatBottomSheet,
    private authService: AuthService,
    private userService: UserService) {
    const userStringData: any = sessionStorage.getItem('userdata');
    this.userdata = JSON.parse(userStringData);
    console.log(this.userdata);

    this.authService.getallUser().subscribe((data) => {
      console.log(data)
      const directorsArray: any = data.filter((obj: any) => obj.role === "Admin")
      console.log(directorsArray);
      this.directors = directorsArray;

    })
  }


  openSheet(): void {
    this._bottomSheet.open(BottomSheetDirectorsComponent);
  }
  updateSheet(quater_id: number): void {

  }
  deleteDirector(id: number) {
    this.userService.deleteUser(id);
    setTimeout(() => {
      location.reload();
    }, 3000);
  }

  logOut() { }
}
