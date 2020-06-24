import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationSalaireComponent } from './creation-salaire/creation-salaire.component';


const routes: Routes = [
  {path:'creation',component:CreationSalaireComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaireRoutingModule { }
