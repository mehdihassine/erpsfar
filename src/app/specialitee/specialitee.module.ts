import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialiteeRoutingModule } from './specialitee-routing.module';
import { AjouterSpecialiteeComponent } from './ajouter-specialitee/ajouter-specialitee.component';
import { ListesSpecialiteeComponent } from './listes-specialitee/listes-specialitee.component';
import { ModifierSpecialiteeComponent } from './modifier-specialitee/modifier-specialitee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AjouterSpecialiteeComponent, ListesSpecialiteeComponent, ModifierSpecialiteeComponent],
  imports: [
    CommonModule,
    SpecialiteeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SpecialiteeModule { }
