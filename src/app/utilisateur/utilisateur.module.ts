import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { CreationUserComponent } from './creation-user/creation-user.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [CreationUserComponent, ListeUserComponent, ModifierProfilComponent],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    DataTablesModule
  ]
})
export class UtilisateurModule { }
