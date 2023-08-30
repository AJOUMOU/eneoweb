import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HomeComponent } from './home/home.component';
import { Tes1Component } from './tes1/tes1.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DirectorComponent } from './pages/director/director.component';
import { QuatersComponent } from './pages/quaters/quaters.component';
import { DocumentsComponent } from './pages/documents/documents.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'sidemenu', component:SidemenuComponent},
  {path:'home', component:HomeComponent},
  {path:'test1', component:Tes1Component},
  {path:'departments',component:DepartmentsComponent},
  {path:'agents',component:AgentsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'director',component:DirectorComponent},
  {path:'quaters',component:QuatersComponent},
  {path:'document',component:DocumentsComponent}
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
