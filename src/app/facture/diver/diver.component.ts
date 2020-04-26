import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-diver',
  templateUrl: './diver.component.html'
     
})
export class DiverComponent implements OnInit {

  public nligne1: number = 0;
  table4: any = [];
  facture: any=[];

  description: any;
  montant: any;
  table3: any;
  txtbox: any;
  txtbox2: any;
  table5: any;
  ttc: any;
  montanttotal: any;
  table: any;
  nfacture:any;
  datecreation: any; 
  nfacture2: any;
  typestockage:any;
  type:any;
 
  datefinv:any;
  fournisseur:any;
  prixachat: any; 
  libelle:any;
  nomclient:any;
  adresse:any;
  
 
  descriptionbox: string;
  montantbox: string;
  adressebox: string;
  nomclientbox: string;

  constructor(private service: FactureService, private router: Router,private datePipe: DatePipe) { }

  ngOnInit(): void {
  
    this.newfacturediver() ;

  }

  newfacturediver() {
    var nfacture: number;
    /* get num commande +1 */
    this.service.getnumdiver().subscribe(data => {
      nfacture = (data.nfacture); 
      console.log('getnumdiver = ' + nfacture);
      this.nfacture = nfacture;
      //this.getartfacture(this.nfacture);
      this.prixfacture(nfacture);
    }, error => console.log(error));
  }

  prixfacture(nfacture){
    this.service.montanttotaldivers(nfacture).subscribe(data7 => {
    this.montanttotal=data7.montanttotal;
    this.montanttotal=this.montanttotal+'TND';
    console.log('ttc = ' + data7.montanttotal);
    }, error => console.log(error));
  }


//recherch article dans la facture

  getartfacture(nfacture) {
    this.service.getartdiver(nfacture).subscribe(data4 => {
      //console.log('ncmde getartcdv  = '+nfacture);
      this.table4[0] = data4; //[0]
      this.facture = this.table4[0];
     //console.log('php = '+JSON.stringify(this.facture));
     this.prixfacture(nfacture);

    }, error => console.log(error));
  }




  //refresh table facture 
  refreshfacture(nfacture) {
     this.facture = [];
     this.getartfacture(nfacture);
     this.prixfacture(nfacture);
   }
//efacer les  champs input 
   cleartextbox() {
    this.descriptionbox = '';
    this.montantbox = '';
    this.description = '';
    this.montant = '';

    //console.log('txtbox = '+this.txtbox);
  }

//counter nligne
increment() { this.nligne1 += 1; }
setnlignezero() { this.nligne1 = 0; }


ajouter() {
  var table3: any = [];
  this.increment();
  console.log('facture = ' + this.nfacture + ' ' + 'produit= ' + this.description);
  
  this.service.addarticlediver(this.nfacture, this.nligne1, this.description, this.montant).subscribe(data3 => {
    table3 = data3;
    this.table3 = JSON.stringify(table3);
    console.log(table3);
    this.cleartextbox();
   // this.dataecrea();
    this.refreshfacture(this.nfacture);
  


  }, error => console.log(error));

}




suppartfacture(nligne1) {

  console.log(''+this.nfacture+''+nligne1+'');

  var table5: any = [];
  this.service.supprimerartdiver(this.nfacture, nligne1).subscribe(data5 => {
    table5 = data5;
    this.table5 = JSON.stringify(table5.resp);
    console.log(this.table5);
    this.cleartextbox();
    this. refreshfacture(this.nfacture);
  }, error => console.log(error));
}




annuler(nfacture) {
  console.log('nfacture = ' + nfacture);
  this.service.annulerfacturediver(this.nfacture).subscribe(data => {
    this.table4[0] = data;
    console.log('reponse  = ' + JSON.stringify(this.table4[0].resp));
    this.facture = [];
   this.setnlignezero();
    this.cleartextbox();
    this.montanttotal="";
    this.newfacturediver();

    this.descriptionbox = '';
    this.montantbox = '';
    
  }, error => console.log(error));
}



valider(nfacture) {
  console.log('nfacture = ' + nfacture);
  var resultat:any = [];
  this.service.verifefacturediver(nfacture).subscribe(data7 => {
    resultat =(data7);
    var result = resultat.resp;
  console.log('resp = ' +resultat.resp );
  if (result === "0") { //RESULT KO
    alert(' Erreur facture ['+this.nfacture+']');
    this.router.navigate(["facture/diver/"]);}
  else{
  console.log('nfacture = ' + nfacture);
  this.service.validerfacturediver(nfacture).subscribe(data => {
    this.table4[0] = data;
    console.log('php = ' + JSON.stringify(this.table4[0].resp));
    this.facture = [];
    this.setnlignezero();
    this.cleartextbox();
    this.montanttotal="";
    this.newfacturediver();
  this.router.navigate(["facture/detaildiv/"+nfacture]);
    
  }, error => console.log(error));
}
}, error => console.log(error));

}
























}
