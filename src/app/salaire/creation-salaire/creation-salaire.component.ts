import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SalairesService } from 'src/app/services/salaires.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-salaire',
  templateUrl: './creation-salaire.component.html',
  styleUrls: ['./creation-salaire.component.css']
})
export class CreationSalaireComponent implements OnInit {
  fiche:any=[];
  datefiche: string;
  datefiche1: string;
  years: any;
  matricule:any;
  cinEmployee: any;
  table4: any=[];
  nomEmployee: any="";
  prenomEmployee: any="";
  libelle: any;
  salairetotale: any;
  cnssEmployee: any;
  salairejour: any;
  nbjour:any ;
  montant:any="0.000"; 
  nbferier:any;
  prime:any;
  indtransport:any;
  majtransport:any;
  payee: any;
  primepanier:any; 
  primepresence:any; 
  Conge:any; 
  congier:any;
  salairebrute:any;
  cnss:any;
  irp:any ; 
  salaireimpossable:any ; 
  table3: string;
  constructor(private datePipe: DatePipe, private service:SalairesService,private toastr:ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.cleartxt();
    this.indtransport=7.000.toFixed(3);
    this.majtransport=49.276;
    var date = new Date();
    this.datefiche=this.datePipe.transform(date,"ddMMyyyy");
    this.datefiche1=this.datePipe.transform(date,"dd/MM/yyyy");
this.years =date.getFullYear();
   this.getmatricule(); 
  let a=parseFloat(this.montant);
  let b=parseFloat(this.prime);
  let c=parseFloat(this.congier);
  let d=parseFloat(this.salairebrute);
   console.log(a);
   this.montant=a;
   this.prime=b;
   this.congier=c;
   this.salairebrute=d;
   console.log(this.montant);
  

  }
 getmatricule(){
   this.service.getmat().subscribe(data=>{
    if(data.RESPONSE){
      this.toastr.warning("liste employer vide !! "); 
        }else{this.table4= data;
          this.cleartxt();}
         
         

   }, error => console.log(error));

 }
 getlibelle(){

  for (let i=0; i<this.table4.length; i++) {
    if(this.matricule== this.table4[i].idEmployee){
      this.cinEmployee=this.table4[i].cinEmployee;
      this.nomEmployee=this.table4[i].nomEmployee;
      this.prenomEmployee=this.table4[i].prenomEmployee;
      this.libelle=this.table4[i].libelle;
      this.cnssEmployee=this.table4[i].cnssEmployee;
      this.salairetotale=this.table4[i].salairetotale;
      this.salairejour=this.table4[i].salairejour;
      return this.matricule;
    }
    else{
      if((this.matricule===undefined)||(this.matricule==="")){
        this.cinEmployee="";
        this.nomEmployee="";
        this.prenomEmployee="";
        this.libelle="";
        this.cnssEmployee="";
        this.salairetotale="";
        this.matricule="";
        this.salairebrute=0; 

      }
      else{
        this.cinEmployee="";
        this.nomEmployee="";
        this.prenomEmployee="";
        this.libelle="";
        this.cnssEmployee="";
        this.salairetotale="";
        this.salairebrute=0; 
        
      }
    }
  }
 
   }


cleartxt(){
  this.cinEmployee="";
  this.nomEmployee="";
  this.prenomEmployee="";
  this.libelle="";
  this.cnssEmployee="";
  this.salairetotale="";
  this.matricule="";
  this.salairebrute=0; 
  this.cnss=0;
  this.irp=0;
  this.prime=0;
  this.nbferier=0;
  this.congier=0;
  this.nbjour=0;
  this.Conge=0;
  this.salaireimpossable=0;

}

salaire(){
var x:any;   
  console.log(this.montant);
   
  if ((this.nbjour=="")||(this.matricule=="")||(this.nbferier=="")||(this.Conge=="")){
    this.montant=0;
    this.prime=0;
    this.congier=0; 
    this.salairebrute=0; 
    console.log(this.montant);
  }
  else{
    let i=this.salairejour*this.nbjour;
    x=i; 
    this.montant=x.toFixed(3) ;
    console.log(this.montant);
    let y=((this.nbferier*this.salairejour)+((this.salairejour*140)/100));
    console.log(y);
    this.prime=y.toFixed(3);
    console.log(this.prime);
    let a = this.Conge*this.salairejour ;
    this.congier=a.toFixed(3); 
    let val1c1 = parseFloat(this.indtransport);
    console.log(val1c1);
    let val1c = parseFloat(this.majtransport);
    console.log(val1c);
    let z=val1c1+val1c;
    console.log(x)
    let b=parseFloat(this.primepanier);
    let e=parseFloat(this.primepresence);
    this.salairebrute=y+x+a+z+b+e ;
    this.salairebrute=this.salairebrute.toFixed(3); 
    let n=parseFloat(this.cnss);
  
this.salaireimpossable=this.salairebrute-n; 

 
  }
  let v=parseFloat(this.irp);
  let y=this.salaireimpossable-v; 

this.payee=y.toFixed(3); 
 
}
 valider(){
  var table3: any = [];
   console.log("employee"+this.matricule);
   console.log("nbrjour"+this.nbjour);
   console.log(this.nbferier);
   console.log(this.primepresence);
   console.log(this.primepanier);
   console.log(this.Conge);
   console.log(this.salairebrute);
   console.log(this.cnss);
   console.log(this.payee);
   console.log(this.irp);
this.service.addfiche(this.matricule,this.nbjour,this.nbferier,this.primepresence,this.primepanier,
  this.Conge,this.salairebrute,this.cnss,this.irp,this.payee).subscribe(data=>{
    table3 = data;
    console.log(data);
    this.table3 = JSON.stringify(table3);
    var resp = data.RESPONSE;

      if(resp === "0"){
        alert(' Erreur Article ['+this.matricule+'] inexistant dans la base !');
      }
      else{
        this.router.navigate(["home/salaire/liste/"+this.matricule]);
       
        
      }


}, error => console.log(error));



 }

}
