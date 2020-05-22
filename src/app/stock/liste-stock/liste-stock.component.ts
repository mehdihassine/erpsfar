import { Component, OnInit } from '@angular/core';
import { ApiStockService } from 'src/app/services/api-stock.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-stock',
  templateUrl: './liste-stock.component.html'
  
})
export class ListeStockComponent implements OnInit {
  employee: any[]
  // constructor(private service:ApiEmployeeService) { }
 
 typec:any;
   typebox: any ; 
   fournisseurs:any[]; 
   libelle : any ; 
   fournisseur: any ; 
   selectedspecialiter: string;
   listesfournisseur: any=[];
   stock:any=[];
   typebox2: any="contrat";
   nreception: any;
   numfact:any;
  idrecp: any;
constructor(private service :ApiStockService,private router: Router, private toastr:ToastrService) { }

ngOnInit(): void {
this.getlistefournisseur();
  this.refrechliste();
}
getlistefournisseur(){
  this.fournisseur="";
  this.service.getAllfournisseur().subscribe(data => {
if(data.RESPONSE){
this.toastr.warning("liste fournisseur vide !! "); 
}else
    {
      this.listesfournisseur = data;
      this.typebox="choisir";
}  
    console.log(this.listesfournisseur);
    },error => console.log(error));
}

refrechliste(){
this.service.getstock().subscribe(data=>{
  console.log(data); 
this.stock=data ; 
},error=> console.log (error));

}
affiche(){
this.refrechliste();
}
creernouveau(){
this.router.navigate(["home/stock/reception"]);
}

idrecep(nreception){
 
this.idrecp=nreception;

 }

 delete(idrecp){
  console.log(idrecp);
  this.service.deleterecep(idrecp).subscribe(data=>{
    console.log(data);
    //this.toastr.success(data.RESPONSE);
    this.refrechliste();
  },error=>console.log(error));
}
Recherche(){

// numero facture , nreception , fournisseur
  if((!this.nreception)&&(!this.numfact)&&(!this.fournisseur)){
    this.toastr.warning('Champ recherche vide !!');
    this.refrechliste();
  
  }
  
  else if((!this.fournisseur)&&(!this.numfact)&&(this.nreception)){
  //servvicce rech avec nreception 
  
  this.service.rechreception(this.nreception).subscribe(data=>{
    console.log(data);
    if (data.RESPONSE){
      this.toastr.warning(data.RESPONSE);
      this.stock= [];
    }else{
      this.stock=data; 
    }
    
  },error=>console.log(error));
  
  }
  
  
  else if((!this.fournisseur)&&(this.numfact)&&(!this.nreception)){
     //service numero facture 
     this.service.rechnumfact(this.numfact).subscribe(data=>{
    console.log(data);
    if (data.RESPONSE){
      this.toastr.warning(data.RESPONSE);
      this.stock=[];
    }else{
      this.stock=data; 
    }
      
    },error=>console.log(error));
    
  }
  
  
  
  
  
   else if((this.fournisseur)&&(!this.numfact)&&(!this.nreception)){
  //   //rechereche avec fournisseur 
  this.service.rechfournisseur(this.fournisseur).subscribe(data=>{
       console.log(data);
     if (data.RESPONSE){
        this.toastr.warning(data.RESPONSE);
       this.stock=[];
      }else{
        this.stock=data; 
      }
      
    },error=>console.log(error));
  }
  
  

 
   this.cleartxtbox();
  
  }
  
  cleartxtbox(){
    this.nreception="";
    this.numfact="";
    this.fournisseur="";
    this.typebox="choisir";
  }




}
