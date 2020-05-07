import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ApiProduitService } from './services/api-produit.service';
import { ApiEmployeeService } from './services/api-employee.service';
import { ApiFournisseurService } from './services/api-fournisseur.service';
import { ApiStockService } from './services/api-stock.service';
import { ApiCategorieService } from './services/api-categorie.service';
import { DatePipe } from '@angular/common';
import { VenteService } from './services/vente.service';
import { FactureService } from './services/facture.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { RedirectComponent } from './redirect/redirect.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MessagesComponent,
    HomeComponent,
    RedirectComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [ApiProduitService,ApiEmployeeService,ApiFournisseurService,ApiStockService,ApiCategorieService,DatePipe,VenteService,FactureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
