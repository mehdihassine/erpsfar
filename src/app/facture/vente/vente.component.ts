import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html'
  
})
export class VenteComponent implements OnInit {

  public nligne1: number = 0;
  table4: any = [];
  facture: any;
  codproduit: any;
  quantite: any;
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
  description:any;
  datefinv:any;
  fournisseur:any;
  prixachat: any; 
  libelle:any;
  nomclient:any;
  adresse:any;
  
 
  codproduitbox: string;
  quantitebox: string;
  adressebox: string;
  nomclientbox: string;
  resultat: any;

  constructor(private service: FactureService, private router: Router,private datePipe: DatePipe) { }

  ngOnInit(): void {
  
    this.newfacturevente() ;

  }


  newfacturevente() {
    var nfacture: number;
    /* get num commande +1 */
    this.service.getnumfacture().subscribe(data => {
      nfacture = (data.nfacture); //nfacture+1 => calculé dans le getnumrecep.php
      console.log('getnumfacture = ' + nfacture);
      this.nfacture = nfacture;
      //this.getartrecep(this.nfacture);
      this.prixfacture(nfacture);
    }, error => console.log(error));
  }


  prixfacture(nfacture){
    this.service.prixtotalfacture(nfacture).subscribe(data7 => {
    this.montanttotal=data7.montanttotal;
    this.montanttotal=this.montanttotal+'TND';
    console.log('ttc = ' + data7.montanttotal);
    }, error => console.log(error));
  }
   

  getartfacture(nfacture) {
    this.service.getartfacture(nfacture).subscribe(data4 => {
      //console.log('ncmde getartcdv  = '+nfacture);
      this.table4[0] = data4;
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


   cleartextbox() {
    this.codproduitbox = '';
    this.quantitebox = '';
    this.codproduit = '';
    this.quantite = '';

    //console.log('txtbox = '+this.txtbox);
  }


  //counter nligne
  increment() { this.nligne1 += 1; }
  setnlignezero() { this.nligne1 = 0; }


  ajouter() {
    var table3: any = [];
    var table9: any = [];
    this.increment();
    console.log('facture = ' + this.nfacture + ' ' + 'produit= ' + this.codproduit);
    console.log('facture = ' + this.quantite + ' ' + 'produit= ' + this.nomclient + 'produit= ' + this.adresse);
    this.service.addarticlefacture(this.nfacture,this.codproduit, this.quantite, this.nomclient, this.adresse).subscribe(data3 => {
      table3 = data3;
      this.table3 = JSON.stringify(table3);
      console.log(data3); 
    //  console.log('facture=' + table3[0] + '|' + 'nligne=' + table3[1]+ '|' + 'art=' + table3[2]+ '|' + 'qte=' + table3[3]);
      this.cleartextbox();
     // this.dataecrea();
      this.refreshfacture(this.nfacture);
    


    }, error => console.log(error));

  }



  suppartfacture(nligne1) {

    console.log(''+this.nfacture+''+nligne1+'');

    var table5: any = [];
    this.service.supprimerartfacture(this.nfacture, nligne1).subscribe(data5 => {
      table5 = data5;
      this.table5 = JSON.stringify(table5.resp);
      console.log(this.table5);
      this.cleartextbox();
      this. refreshfacture(this.nfacture);
    }, error => console.log(error));
  }



  annuler(nfacture) {
    console.log('nfacture = ' + nfacture);
    this.service.annulerfacture(this.nfacture).subscribe(data => {
      this.table4[0] = data;
      console.log('reponse  = ' + JSON.stringify(this.table4[0].resp));
      this.facture = [];
     this.setnlignezero();
      this.cleartextbox();
      this.montanttotal="";
      this.newfacturevente();

      this.nomclientbox="";
      this.adressebox="";
      this.nomclient="";
      this.adresse="";
    }, error => console.log(error));
  }

 


  valider(nfacture) {

    console.log('nfacture = ' + nfacture);

//service veriffacture => exixte ou pas

var resultat:any = [];

//   this.service.verifefacture(nfacture).subscribe(data7 => {


//     resultat =(data7);

//     var result = resultat.resp;
//   console.log('resp = ' +resultat.resp );


//   if (result === "0") { //RESULT KO
//     alert(' Erreur facture ['+this.nfacture+']');
//     this.router.navigate(["home/facture/vente/"]);}



// else{

    this.service.validerfacture(nfacture).subscribe(data => {
      this.table4[0] = data;
      console.log('php = ' + JSON.stringify(this.table4[0].resp));
      this.facture = [];
      this.setnlignezero();
      this.cleartextbox();

      this.router.navigate(["home/facture/detail/"+nfacture]);
      
    }, error => console.log(error));
// }
//     //else erreur
//   }, error => console.log(error));

  }




 

}








