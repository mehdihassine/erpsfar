import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModifierComponent } from './modifier/modifier.component';




@NgModule({
  declarations: [AjoutCategorieComponent, ListeCategorieComponent, ModifierComponent],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule,
    HttpClientModule
    
  ]
})
export class CategorieModule { }
