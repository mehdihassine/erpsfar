import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeProductionComponent } from './liste-production/liste-production.component';
import { ResteProductionComponent } from './reste-production/reste-production.component';

import { CreationComponent } from './creation/creation.component';




const routes: Routes = [
{path:'creation',component:CreationComponent},
{path:'liste',component:ListeProductionComponent},
{path:'reste/:id',component:ResteProductionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
