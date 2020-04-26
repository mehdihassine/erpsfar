import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { ModifierComponent } from './modifier/modifier.component';


const routes: Routes = [
  {path:'ajout',component:AjoutCategorieComponent},
  {path:'all',component:ListeCategorieComponent},
  {path:'edit/:libelle',component:ModifierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
