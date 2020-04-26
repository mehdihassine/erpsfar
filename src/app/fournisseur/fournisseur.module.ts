import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { AjoutFournisseurComponent } from './ajout-fournisseur/ajout-fournisseur.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
import { ListeFournisseurComponent } from './liste-fournisseur/liste-fournisseur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AjoutFournisseurComponent, EditFournisseurComponent, ListeFournisseurComponent],
  imports: [
    CommonModule,
    FournisseurRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FournisseurModule { }
