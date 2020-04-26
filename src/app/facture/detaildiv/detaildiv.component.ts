import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detaildiv',
  templateUrl: './detaildiv.component.html'
 
})
export class DetaildivComponent implements OnInit {

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
    this.nfacture = this.activateroute.snapshot.paramMap.get("div");
    
  }

  ngOnInit(): void {
  
    //this.newfacturevente() ;
this.getartfacturediver(this.nfacture);
this.prixfacture(this.nfacture);
  }



  prixfacture(nfacture){
    this.service.montanttotaldivers(nfacture).subscribe(data7 => {
    this.montanttotale=data7.montanttotal;
    

    console.log('ttc = ' + data7.montanttotal);
    }, error => console.log(error));
  }
   

  // 
  getartfacturediver(nfacture) {
    this.service.getartdiver(nfacture).subscribe(data4 => {
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
     this.getartfacturediver(nfacture);
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

