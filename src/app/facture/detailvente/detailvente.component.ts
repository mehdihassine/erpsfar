import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailvente',
  templateUrl: './detailvente.component.html'
 
})
export class DetailventeComponent implements OnInit {
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
  datesys:any;
  
  imprimer:any;
  codproduitbox: string;
  quantitebox: string;
  adressebox: string;
  nomclientbox: string;
  datefacture: void;
  montantTHT: any;
  montanttva: any;
  montanttotale: any;

  constructor(private service: FactureService, private activateroute:ActivatedRoute,private router: Router) { 
    this.nfacture = this.activateroute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
  
    //this.newfacturevente() ;
this.getartfacture(this.nfacture);
this.piedfacture(this.nfacture);
  }



piedfacture(nfacture){

  this.service.sumpiedfacture(nfacture).subscribe(data => {

    
this.montantTHT=data.montantTHT;
this.montanttva=data.montanttva;
this.montanttotale=data.montanttotale;
  }, error => console.log(error));

}

  prixfacture(nfacture){
    this.service.prixtotalfacture(nfacture).subscribe(data7 => {
    this.montanttotal=data7.montanttotal;
    this.montanttotal=this.montanttotal;

    console.log('ttc = ' + data7.montanttotal);
    }, error => console.log(error));
  }
   

  // 
  getartfacture(nfacture) {
    this.service.getartfacture(nfacture).subscribe(data4 => {
      //console.log('ncmde getartcdv  = '+nfacture);
      this.table4[0] = data4;
      this.facture = this.table4[0];

      this.datefacture=data4[0].datesys; ////// date facture
      this.nomclient=data4[0].nomclient; ////// nom client
      this.adresse=data4[0].adresse; ////// adresse

      this.prixfacture(nfacture);

    }, error => console.log(error));
  }


  //refresh table facture 
  refreshfacture(nfacture) {
    // this.facture = [];
     this.getartfacture(nfacture);
     this.prixfacture(nfacture);
   }


   


  //counter nligne
  increment() { this.nligne1 += 1; }
  setnlignezero() { this.nligne1 = 0; }

  print(imprimer){
    var printContents = document.getElementById(imprimer).innerHTML;    
   var originalContents = document.body.innerHTML;      
   document.body.innerHTML = printContents;     
   window.print();     
   document.body.innerHTML = originalContents;
   }




  }





 