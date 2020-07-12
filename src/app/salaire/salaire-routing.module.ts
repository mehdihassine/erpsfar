import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationSalaireComponent } from './creation-salaire/creation-salaire.component';
import { ListeComponent } from './liste/liste.component';
import { AfficheFicheComponent } from './affiche-fiche/affiche-fiche.component';


const routes: Routes = [
  {path:'creation',component:CreationSalaireComponent},
  {path:'liste',component:ListeComponent},
  {path:'affiche/:id',component:AfficheFicheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaireRoutingModule { }
