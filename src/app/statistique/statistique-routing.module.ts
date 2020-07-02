import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenteComponent } from './vente/vente.component';


const routes: Routes = [
  {path:'statvent', component:VenteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiqueRoutingModule { }
