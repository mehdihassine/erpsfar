import { Component, OnInit } from '@angular/core';
import { ApiStockService } from 'src/app/services/api-stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html'
 
})
export class ReceptionComponent implements OnInit {
codarticle:any; 
libelle: any; 
prixachat:any; 
fournisseur: any; 
datefinv:any; 
description: any ;
type:any; 
typestockage : any ; 

libellearticle: any;
  constructor(private service:ApiStockService, private router: Router) { }

  ngOnInit(): void {

  }


getallarticle(){
  this.service.getallarticle().subscribe(data=>{
    console.log(data);
  },error=>console.log(error));
}
















}
