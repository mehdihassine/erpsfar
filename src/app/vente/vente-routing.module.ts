import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeVenteComponent } from './liste-vente/liste-vente.component';
import { DetailComponent } from './detail/detail.component';
import { ListeventeComponent } from './listevente/listevente.component';


const routes: Routes = [
  {path:'liste',component:ListeVenteComponent},
  {path:'detail',component:DetailComponent},
  {path:'ventes/:id',component:ListeventeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteRoutingModule { }
