import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';


const routes: Routes = [
  {path:'add', component:AjoutProduitComponent},
  {path:'edit/:id', component:EditProduitComponent},
  {path:'all', component:ListProduitComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
