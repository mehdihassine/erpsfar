import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {
nfacture:any;
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
  nomfr: any;
  ville: any;
  codepostal: any;
  email: any;
  telephone: any;
  fax: any;
  mth: any;
  mtht: any;
  mttv: any;
  mttc: any;
  constructor(private service: FactureService, private activateroute:ActivatedRoute,private router: Router) {
    this.nfacture = this.activateroute.snapshot.paramMap.get("id");
   }
 
  ngOnInit(): void {
    this.getartfacture(this.nfacture);
    this.piedfacture(this.nfacture);
      }

    
    
    piedfacture(nfacture){
    
      this.service.sumpiedfactureachat(nfacture).subscribe(data => {
    
        
    this.montantTHT=data.montantTHT;
    
    this.montanttva=data.montanttva;
    this.montanttotale=data.montanttotale.toFixed(3);
    this.mtht=Math.round(this.montantTHT).toFixed(3);
    this.mttv=Math.round(this.montanttva).toFixed(3);
    this.mttc=Math.round(this.montanttotale).toFixed(3);
      }, error => console.log(error));
    
    }
    
      prixfacture(nfacture){
        this.service.prixtotalfactureachat(nfacture).subscribe(data7 => {
        this.montanttotal=data7.montanttotal;
        this.montanttotal=this.montanttotal;
    
        console.log('ttc = ' + data7.montanttotal);
        }, error => console.log(error));
      }
       
    
      // 
      getartfacture(nfacture) {
        this.service.getartfactureachat(nfacture).subscribe(data4 => {
          //console.log('ncmde getartcdv  = '+nfacture);
          this.table4[0] = data4;
          this.facture = this.table4[0];
    
          this.datefacture=data4[0].datesys; ////// date facture
          this.nomfr=data4[0].nomfr; ////// nom fournisseur
          
    this.ville=data4[0].villefr;
    this.adresse=data4[0].adresse;
    this.codepostal=data4[0].codepostal;
    this.email=data4[0].mailfr;
    this.telephone=data4[0].telfr;
    this.fax=data4[0].fax;
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
