import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaireRoutingModule } from './salaire-routing.module';
import { CreationSalaireComponent } from './creation-salaire/creation-salaire.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';
import { AfficheFicheComponent } from './affiche-fiche/affiche-fiche.component';


@NgModule({
  declarations: [CreationSalaireComponent, ListeComponent, AfficheFicheComponent],
  imports: [
    CommonModule,
    SalaireRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SalaireModule { }
