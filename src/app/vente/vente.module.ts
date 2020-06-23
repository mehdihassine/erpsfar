import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenteRoutingModule } from './vente-routing.module';

import { ListeVenteComponent } from './liste-vente/liste-vente.component';

import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListeventeComponent } from './listevente/listevente.component';


@NgModule({
  declarations: [ListeVenteComponent,  DetailComponent, ListeventeComponent],
  imports: [
    CommonModule,
    VenteRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class VenteModule {
 






















 }
