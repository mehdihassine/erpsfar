import { Component, OnInit } from '@angular/core';
import { ApiStockService } from 'src/app/services/api-stock.service';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sortie-stock',
  templateUrl: './sortie-stock.component.html'

})
export class SortieStockComponent implements OnInit {
  codarticle:any; 
quantite:any;
numsuport:any; 
motif:any; 
aff:any=[];
datesortie:any;
datecreation: any; 
datesortie2: any;
  table4: any= [];
  nligne1: any;
  table3: string; 

  constructor(private service:ApiStockService, private router:Router,private datePipe: DatePipe) { }

  ngOnInit(): void {
    
    var date = new Date();
    this.datesortie=this.datePipe.transform(date,"ddMMyyyy");
    this.datesortie2=this.datePipe.transform(date,"dd/MM/yyyy");

    this.getartsort(this.datesortie);
  }
getartsort(datesortie){
  this.service.getartsort(datesortie).subscribe(data4 => {
    console.log(' getartprod  = '+datesortie);
    this.table4 = data4;
    this.aff = this.table4;

    console.log(this.aff );

   //console.log('php = '+JSON.stringify(this.aff));
   //this.prixprod(dateprod);

  }, error => console.log(error));
}

refreshprod(datesortie) {
  this.aff = [];
 
 this.getartsort(datesortie);
}

ajouter(){
  this.service.getlastligne(this.datesortie).subscribe(data5 => {
    this.nligne1 = data5.nligne;
    

    console.log('nligne='+this.nligne1);
 
    var table3: any = [];

this.service.addsortiestock(this.datesortie,this.nligne1,this.codarticle,this.quantite,this.motif).subscribe(data3 => {
  table3 = data3;
  console.log(data3);
  //this.toastr.show("article ajoutee ");
  this.table3 = JSON.stringify(table3);
  
  console.log('date='+this.datesortie );
  console.log('nligne='+this.nligne1 );
  console.log('codart='+this.codarticle );
  console.log('qte='+this.quantite );

  this.cleartxtbox();

  this.refreshprod(this.datesortie);
}, error => console.log(error));
}, error => console.log(error));

}


cleartxtbox(){
  this.codarticle="";
  this.quantite="";
  this.motif="choisir";
}



annuler(datesortie) {
  console.log('cdv = ' + datesortie);
  this.service.annulersort(datesortie).subscribe(data => {
    this.table4[0] = data;
    console.log(data);
    console.log('reponse  = ' + JSON.stringify(this.table4[0].resp));
    this.aff = [];
  //  this.setnlignezero();
    this.cleartxtbox();
    
   // this.newproduction();
  }, error => console.log(error));
}











}
