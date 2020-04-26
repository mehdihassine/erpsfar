import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutFournisseurComponent } from './ajout-fournisseur/ajout-fournisseur.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
import { ListeFournisseurComponent } from './liste-fournisseur/liste-fournisseur.component';


const routes: Routes = [
  {path:'ajout', component:AjoutFournisseurComponent},
  {path:'edit/:id',component:EditFournisseurComponent},
  {path:'list',component:ListeFournisseurComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
