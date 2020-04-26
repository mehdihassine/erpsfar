import { Component, OnInit } from '@angular/core';
import { ApiStockService } from 'src/app/services/api-stock.service';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-sortie-stock',
  templateUrl: './sortie-stock.component.html'

})
export class SortieStockComponent implements OnInit {
codarticle:any; 
qte:any;
numsuport:any; 
motif:any; 

  constructor(private service:ApiStockService, private router:Router) { }

  ngOnInit(): void {
  }

  sup(){/*
this.service.sortieStock(this.codarticle,this.qte,this.numsuport,this.motif).subscribe(data=>{
  console.log(data);
  
},error=>console.log(error));
this.router.navigate(["stock/all"])
  }*/
}
}