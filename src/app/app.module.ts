import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatCardModule} from '@angular/material/card';

import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ViewUserBottomSheetComponent } from './components/view-user-bottom-sheet/view-user-bottom-sheet.component';
import { Tes1Component } from './tes1/tes1.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { AgentsComponent } from './pages/agents/agents.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogDepartmentComponent } from './components/dialog-department/dialog-department.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RequestsComponent } from './components/requests/requests.component';
import { DirectorComponent } from './pages/director/director.component';
import { BottomSheetQuatersComponent } from './components/bottom-sheet-quaters/bottom-sheet-quaters.component';
import { QuatersComponent } from './pages/quaters/quaters.component';
import { BottomSheetApdateQuaterComponent } from './components/bottom-sheet-apdate-quater/bottom-sheet-apdate-quater.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { BottomSheetDocumentComponent } from './components/bottom-sheet-document/bottom-sheet-document.component';
import { BottomSheetAgentsComponent } from './components/bottom-sheet-agents/bottom-sheet-agents.component';
import { BottomSheetDirectorsComponent } from './components/bottom-sheet-directors/bottom-sheet-directors.component';
import { RequestComponent } from './pages/request/request.component';
import { MyRequestComponent } from './pages/my-request/my-request.component';
import { AdminRequestComponent } from './pages/admin-request/admin-request.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidemenuComponent,
    RegisterComponent,
    ViewUserBottomSheetComponent,
    Tes1Component,
    DepartmentsComponent,
    AgentsComponent,
    ProfileComponent,
    DialogDepartmentComponent,
    RequestsComponent,
    DirectorComponent,
    BottomSheetQuatersComponent,
    QuatersComponent,
    BottomSheetApdateQuaterComponent,
    DocumentsComponent,
    BottomSheetDocumentComponent,
    BottomSheetAgentsComponent,
    BottomSheetDirectorsComponent,
    RequestComponent,
    MyRequestComponent,
    AdminRequestComponent,
    
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatBottomSheetModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule, 
  

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
