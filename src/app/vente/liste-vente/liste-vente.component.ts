import { Component, OnInit } from '@angular/core';
import { VenteService } from 'src/app/services/vente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-vente',
  templateUrl: './liste-vente.component.html'

})
export class ListeVenteComponent implements OnInit {


 /*
  
  table4: any = [];
  aff: any=[];
 
  quantite: any;  
  table3: string;
  txtbox: any;
  txtbox2: any;
  public nligne1: number = 0;
  table5: string;
  ttc: any;
  montanttotal: any;
  table: any;
  dateAsMMDDYYYYHHNNSS: any;
  day: number;
  month: any;
  year: any;
  h: any;
  m: any;
  s: any;
  


*/
montanttotal:any;
statut:any;
 dateprod: any;
datecreation: any;
codarticle: string;
benficetotal:any;

  constructor(private service :VenteService , private router: Router) { }
production:any ={}

  ngOnInit(): void {
    this.refresh(); 

  }
  
  refresh(){
    this.service.getprodall().subscribe(data=>{ 
      console.log(data); 
    this.production=data ; 
    this.prixprod();
    },error=> console.log (error));

  }
  supprimer( dateprod){
    this.service.supprimerprod( dateprod).subscribe(data=>{
      console.log(data);
      this.refresh();
    },error=>console.log(error));
  }
  

//recherche cdv
rechprod(){
  this.service.rechercheprod(this.dateprod).subscribe(data => {
    console.log("recherche : "+this.dateprod);
    this.production=[];
    this.production=(data);
    console.log(data);
var responserecherche = data[0].respo;

this.benficetotal= data[0].benficeProd;

if(responserecherche === "erreurprod"){
  alert('Commande [ '+this.dateprod+' ] introuvable');
  this.refresh();
  console.log("retour liste");
}
this.dateprod="";

  }, error => console.log(error));
}


affliste(){
  console.log("afficher liste");

  this.dateprod="";
  this.refresh();
}
prixprod(){
  this.service.prixtotalprod().subscribe(data7 => {

  this.benficetotal=data7.benficetotal;
  this.benficetotal=this.benficetotal+' TND';
  console.log('ttc = ' + data7.benficetotal);
  }, error => console.log(error));
}



   

}


