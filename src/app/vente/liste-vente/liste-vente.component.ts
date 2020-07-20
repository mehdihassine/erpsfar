import { Component, OnInit } from '@angular/core';
import { VenteService } from 'src/app/services/vente.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
datprod :any;
  sup: any;
  constructor(private service :VenteService , private router: Router,private toastr:ToastrService) { }
vente:any ={}

  ngOnInit(): void {
    this.refresh(); 

  }
  
  refresh(){
    this.service.getprodall().subscribe(data=>{ 
      console.log(data); 
    this.vente=data ; 
    this.beneficeTotal();
    },error=> console.log (error));

  }
  supprimer (idvente){
    this.sup=idvente;
  }
  delete( sup){
    this.service.supprimerprod( sup).subscribe(data=>{
      console.log(data);
      this.refresh();
    },error=>console.log(error));
  }
  
  Rechercher(){
    console.log(this.dateprod);
this.service.recherchedate(this.dateprod).subscribe(data=>{
  console.log("date  production: "+this.dateprod);
  var responserecherche = data[0].respo

  if((responserecherche === "erreurprod")||(this.dateprod==undefined)){
    this.toastr.warning('Commande [ '+this.dateprod+' ] introuvable');
   
    }else{
    this.vente=data; 
    }
  }, error => console.log(error));

  }



//recherche cdv
Recherche(){
  if (!this.datprod){
    this.toastr.warning("verifier votre date de production ");

  }
  else{


  this.service.recherchedate(this.datprod).subscribe(data => {
    console.log("recherche : "+this.datprod);
    this.vente=[];
    this.vente=(data);
    console.log(data);
var responserecherche = data[0].respo;

this.benficetotal= data[0].benficeProd;

if(responserecherche === "erreurprod"){
  this.toastr.warning('Commande introuvable');
  this.refresh();
  console.log("retour liste");
}
this.datprod="";

  }, error => console.log(error));
}
}

affliste(){
  console.log("afficher liste");

  this.dateprod="";
  this.refresh();
}
beneficeTotal(){
  this.service.prixtotalprod().subscribe(data7 => {

  this.benficetotal=data7.benficetotal;
  this.benficetotal=this.benficetotal+' TND';
  console.log('ttc = ' + data7.benficetotal);
  }, error => console.log(error));
}



   

}


