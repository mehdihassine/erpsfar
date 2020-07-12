import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalairesService } from 'src/app/services/salaires.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-affiche-fiche',
  templateUrl: './affiche-fiche.component.html',
  styleUrls: ['./affiche-fiche.component.css']
})
export class AfficheFicheComponent implements OnInit {
  idsalaire: any;
  table4: any;
  salaire: any;
  datefiche: string;
  datefiche1: string;
  years: any;
  matricule:any;
  cinEmployee: any;

  nomEmployee: any="";
  prenomEmployee: any="";
  libelle: any;
  salairetotale: any;
  cnssEmployee: any;
  salairejour: any;
  nbrjour:any ;
  montant:any="0.000"; 
  nbferier:any;
  prime:any;
  primeP:any;
  primePr:any ;
  indtransport:any;
  majtransport:any;
  payee: any;
  primepanier:any; 
  primepresence:any; 
  conger:any; 
  congier:any;
  salairebrute:any;
  cnss:any;
  irpp_css:any ; 
  salaireimpossable:any ; 
  table3: string;
  jourferier:any; 
  idemploye:any ; 
  salairenet: any;

  constructor(private service:SalairesService,private toastr:ToastrService,private router: Router,private activateroute:ActivatedRoute)
  {this.idsalaire = this.activateroute.snapshot.paramMap.get("id") }

  ngOnInit(): void {
  this.getfiche(this.idsalaire); 
  }
getfiche(idsalaire){
  var x :any ; 
  this.service.refrech(idsalaire).subscribe(data4=>{
    console.log(data4);
    this.table4 = data4[0];
      this.salaire = this.table4;
      console.log(this.salaire);
this.datefiche=data4[0].datefiche;
this.matricule=data4[0].idEmployee; 
this.nomEmployee=data4[0].nomEmployee;
this.prenomEmployee=data4[0].prenomEmployee;
this.cinEmployee=data4[0].cinEmployee;
this.libelle=data4[0].libelle;
this.cnssEmployee=data4[0].cnssEmployee;
this.salairetotale=data4[0].salairetotale;
this.salairejour=data4[0].salairejour;
this.nbrjour=data4[0].nbrjour;
this.jourferier=data4[0].jourferier;
this.nbrjour=data4[0].nbrjour;
this.primePr=data4[0].primePr;
this.primeP=data4[0].primeP;
this.conger=data4[0].conger;
this.salairebrute=data4[0].salairebrute;
this.cnss=data4[0].cnss;
this.irpp_css=data4[0].irpp_css;
this.salairenet=data4[0].salairenet;

let b=parseInt(this.jourferier); 
let a=parseFloat(this.salairejour);
let i=parseFloat(this.nbrjour);
let c= parseFloat(this.conger);
let s= parseFloat(this.salairebrute); 
let d= parseFloat(this.cnss); 


let k =s-d;


console.log(k);
this.salaireimpossable=k.toFixed(3);
console.log(this.salaireimpossable);
let x =i*a; 
let y=((b*a)+((a*140)/100));
 let f= c*a;
this.montant=x.toFixed(3) ;
this.prime=y.toFixed(3);
this.indtransport=7.000.toFixed(3);
this.majtransport=49.276;
this.congier=f.toFixed(3); 
this.primeP=this.primeP.toFixed(3);
this.primePr=this.primePr.toFixed(3); 
this.cnss=this.cnss.toFixed(3); 
this.payee=this.salairenet.toFixed(3);


      
  }, error => console.log(error));
}
print(imprimer){
  var printContents = document.getElementById(imprimer).innerHTML;    
 var originalContents = document.body.innerHTML;      
 document.body.innerHTML = printContents;     
 window.print();     
 document.body.innerHTML = originalContents;
 }
 retour(){
   this.router.navigate(["home/salaire/liste"]);
 }
 
}

