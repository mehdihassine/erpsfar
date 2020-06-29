import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaireRoutingModule } from './salaire-routing.module';
import { CreationSalaireComponent } from './creation-salaire/creation-salaire.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CreationSalaireComponent],
  imports: [
    CommonModule,
    SalaireRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SalaireModule { }
