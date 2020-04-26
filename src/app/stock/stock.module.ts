import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';

import { AjoutStockComponent } from './ajout-stock/ajout-stock.component';
import { ListeStockComponent } from './liste-stock/liste-stock.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ AjoutStockComponent, ListeStockComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
   FormsModule,
    HttpClientModule
  ]
})
export class StockModule { }
