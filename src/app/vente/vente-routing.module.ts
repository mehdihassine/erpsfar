import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeVenteComponent } from './liste-vente/liste-vente.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path:'liste',component:ListeVenteComponent},
  {path:'detail',component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteRoutingModule { }
