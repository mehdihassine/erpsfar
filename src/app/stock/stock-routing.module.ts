import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutStockComponent } from './ajout-stock/ajout-stock.component';
import { ListeStockComponent } from './liste-stock/liste-stock.component';


import { SortieStockComponent } from './sortie-stock/sortie-stock.component';
import { ListeReceptionComponent } from './liste-reception/liste-reception.component';
import { DetailRecpeptionComponent } from './detail-recpeption/detail-recpeption.component';


const routes: Routes = [
  {path:'reception',component:AjoutStockComponent},
 
  {path:'liste', component:ListeStockComponent},
 
  {path:'sortie',component:SortieStockComponent},
  {path:'all',component:ListeReceptionComponent},
  {path:'detail/:id',component:DetailRecpeptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
