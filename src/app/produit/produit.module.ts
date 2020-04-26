import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AjoutProduitComponent, ListProduitComponent, EditProduitComponent],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProduitModule { }
