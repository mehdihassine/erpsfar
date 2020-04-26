import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureRoutingModule } from './facture-routing.module';
import { AchatComponent } from './achat/achat.component';
import { VenteComponent } from './vente/vente.component';
import { DiverComponent } from './diver/diver.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DetailventeComponent } from './detailvente/detailvente.component';
import { DetaildivComponent } from './detaildiv/detaildiv.component';
import { ListeComponent } from './liste/liste.component';


@NgModule({
  declarations: [AchatComponent, VenteComponent, DiverComponent, DetailventeComponent, DetaildivComponent, ListeComponent],
  imports: [
    CommonModule,
    FactureRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FactureModule { }
