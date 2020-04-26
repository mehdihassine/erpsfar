import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { ProduitModule } from './produit/produit.module';
import{EmployeeModule} from './employee/employee.module';
import{StockModule} from './stock/stock.module';
import{FournisseurModule} from './fournisseur/fournisseur.module';
import{CategorieModule}from'./categorie/categorie.module';
import{ArticleModule} from'./article/article.module';
import{ProductionModule}from'./production/production.module';
import{VenteModule} from'./vente/vente.module';
import{FactureModule} from './facture/facture.module';
import{SpecialiteeModule}from'./specialitee/specialitee.module';
import{AuthModule}from'./auth/auth.module'; 
import{UtilisateurModule}from './utilisateur/utilisateur.module';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
 {path:'',loadChildren:'./auth/auth.module#AuthModule'},
  
 { path: 'home', component: HomeComponent,
 children: [
   
  {path: 'produit', loadChildren:'./produit/produit.module#ProduitModule'},
  {path:'employee',loadChildren:'./employee/employee.module#EmployeeModule'},
  {path :'stock',loadChildren :'./stock/stock.module#StockModule'},
  {path:'fournisseur',loadChildren:'./fournisseur/fournisseur.module#FournisseurModule'},
  {path:'categorie',loadChildren:'./categorie/categorie.module#CategorieModule'},
  {path:'article',loadChildren:'./article/article.module#ArticleModule'},
  {path:'production',loadChildren:'./production/production.module#ProductionModule'},
 {path:'vente',loadChildren:'./vente/vente.module#VenteModule'},
 {path:'facture',loadChildren:'./facture/facture.module#FactureModule'},
 {path:'specialitee',loadChildren:'./specialitee/specialitee.module#SpecialiteeModule'},
 {path:'utilisateur',loadChildren:'./utilisateur/utilisateur.module#UtilisateurModule'},
 {path: 'msg', component: MessagesComponent},
 //commentaire walid
   //comment 2 pc walid
 ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
