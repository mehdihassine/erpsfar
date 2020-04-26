import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutEmployeeComponent } from './ajout-employee/ajout-employee.component';

import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { componentFactoryName } from '@angular/compiler';
import { ModifierEmployeeComponent } from './modifier-employee/modifier-employee.component';


const routes: Routes = [
  {path:'ajout',component:AjoutEmployeeComponent},
 {path:'modifier/:matricule',component:ModifierEmployeeComponent},
  {path:'all', component:ListEmployeeComponent} 
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
