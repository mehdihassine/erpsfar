import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterSpecialiteeComponent } from './ajouter-specialitee/ajouter-specialitee.component';
import { ListesSpecialiteeComponent } from './listes-specialitee/listes-specialitee.component';
import { ModifierSpecialiteeComponent } from './modifier-specialitee/modifier-specialitee.component';


const routes: Routes = [
  {path:'ajoute',component:AjouterSpecialiteeComponent},
  {path:'liste',component:ListesSpecialiteeComponent},
  {path:'modifier/:libelle',component:ModifierSpecialiteeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialiteeRoutingModule { }
