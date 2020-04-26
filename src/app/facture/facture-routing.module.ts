import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenteComponent } from './vente/vente.component';
import { AchatComponent } from './achat/achat.component';
import { DiverComponent } from './diver/diver.component';
import { DetailventeComponent } from './detailvente/detailvente.component';
import { DetaildivComponent } from './detaildiv/detaildiv.component';
import { ListeComponent } from './liste/liste.component';


const routes: Routes = [
  {path:'vente',component:VenteComponent},
  {path:'achat',component:AchatComponent},
  {path:'diver',component:DiverComponent},
  {path:'detail/:id',component:DetailventeComponent},
  {path:'detaildiv/:div',component:DetaildivComponent},
  {path:'liste',component:ListeComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
