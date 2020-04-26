import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutStockComponent } from './ajout-stock/ajout-stock.component';
import { ListeStockComponent } from './liste-stock/liste-stock.component';


import { SortieStockComponent } from './sortie-stock/sortie-stock.component';


const routes: Routes = [
  {path:'reception',component:AjoutStockComponent},
 
  {path:'liste', component:ListeStockComponent},
 
  {path:'sortie',component:SortieStockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
