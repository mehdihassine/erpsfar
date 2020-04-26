import { Component, OnInit } from '@angular/core';
import { ApiStockService } from 'src/app/services/api-stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-stock',
  templateUrl: './ajout-stock.component.html'
 
})
export class AjoutStockComponent implements OnInit {

  constructor(private service: ApiStockService , private router : Router) { }
  
  codarticle:any;
  libelle:any;
  prixachat:any;
  fournisseur:any;
  datefinv:any;
  description:any;
  type:any;
  typestockage:any;
  ngOnInit(): void {
  }
  
}
