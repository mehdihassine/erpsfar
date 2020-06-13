import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AjoutEmployeeComponent } from './ajout-employee/ajout-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifierEmployeeComponent } from './modifier-employee/modifier-employee.component';


@NgModule({
  declarations: [AjoutEmployeeComponent, ListEmployeeComponent,  ModifierEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
