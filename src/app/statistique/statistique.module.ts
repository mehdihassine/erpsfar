import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatistiqueRoutingModule } from './statistique-routing.module';
import { VenteComponent } from './vente/vente.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [VenteComponent],
  imports: [
    CommonModule,
    ChartsModule,
    StatistiqueRoutingModule
  ]
})
export class StatistiqueModule { }
