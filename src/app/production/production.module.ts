import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import { ListeProductionComponent } from './liste-production/liste-production.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResteProductionComponent } from './reste-production/reste-production.component';

import { from } from 'rxjs';
import { CreationComponent } from './creation/creation.component';


@NgModule({
  declarations: [ListeProductionComponent, ResteProductionComponent, CreationComponent],
  imports: [
    CommonModule,
    ProductionRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProductionModule { }
