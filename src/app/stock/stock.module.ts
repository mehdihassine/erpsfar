import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';

import { AjoutStockComponent } from './ajout-stock/ajout-stock.component';
import { ListeStockComponent } from './liste-stock/liste-stock.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListeReceptionComponent } from './liste-reception/liste-reception.component';
import { DetailRecpeptionComponent } from './detail-recpeption/detail-recpeption.component';


@NgModule({
  declarations: [ AjoutStockComponent, ListeStockComponent, ListeReceptionComponent, DetailRecpeptionComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
   FormsModule,
    HttpClientModule
  ]
})
export class StockModule { }
