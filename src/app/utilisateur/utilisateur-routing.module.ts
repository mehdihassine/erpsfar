import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationUserComponent } from './creation-user/creation-user.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';


const routes: Routes = [
  {path:'creation',component:CreationUserComponent},
  {path:'list',component:ListeUserComponent},
  {path:'modifier/:iduser',component:ModifierProfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
