import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaireRoutingModule } from './salaire-routing.module';
import { CreationSalaireComponent } from './creation-salaire/creation-salaire.component';


@NgModule({
  declarations: [CreationSalaireComponent],
  imports: [
    CommonModule,
    SalaireRoutingModule
  ]
})
export class SalaireModule { }
