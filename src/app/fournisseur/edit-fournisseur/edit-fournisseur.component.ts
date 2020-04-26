import { Component, OnInit } from '@angular/core';
import { ApiFournisseurService } from 'src/app/services/api-fournisseur.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';

@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html'

})
export class EditFournisseurComponent implements OnInit {
  nomfournisseur:any; 
  adresse:any;
   ville:any;
    codepostal :any;
    email:any;
    telephone:any;
     fax:any;
   
     fournisseur:any=[];
  idfr: any;
  fournisseur1: any=[];

  constructor(private service:ApiFournisseurService, private activateroute:ActivatedRoute, private router:Router, private toastr:ToastrService) {
    this.idfr = this.activateroute.snapshot.paramMap.get("id"); 
  }
  
  ngOnInit(): void {
    this.getfournisseur();
  }

getfournisseur(){
  this.service.getfournisseurByID(this.idfr).subscribe(data=>{
    
    this.fournisseur=data[0];
    

    this.nomfournisseur=this.fournisseur.nomfr ; //nomfr => base de données!!!!
    this.adresse=this.fournisseur.adresse ;
    this.ville=this.fournisseur.villefr ; 
    this.codepostal=this.fournisseur.codepostal ;
    this.email=this.fournisseur.mailfr ; 
    this.telephone=this.fournisseur.telfr ;
    this.fax=this.fournisseur.fax ;

    this.fournisseur=this.fournisseur[0];
    
  },error=>console.log(error));


}

edit(idfr){
  this.fournisseur=[];
  var reg = /^[0-9]+$/;
  var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  if (!this.nomfournisseur) {
   this.toastr.error('champ nom fournisseur obligatoire!!');
  }

  else if (!this.adresse) {
    this.toastr.error('champ adresse obligatoire!!');
  }
  else if (!this.ville) {
    this.toastr.error('champ ville obligatoire!!');
  }

  else if (!this.codepostal.match(reg)) {
    this.toastr.error('champ codepostal numerique!!');
  }

  else if (!this.telephone.match(reg)) {
    this.toastr.error('champ telephone numerique!!');
  }
  else if (!this.fax.match(reg)) {
    this.toastr.error('champ fax numerique!!');
  }
  else if (!this.email.match(regemail)) {
    this.toastr.error('champ email invalide!!');
  }
else{

  console.log(this.idfr);


  if (this.idfr) { this.fournisseur.idfr = this.idfr; }

  console.log(this.fournisseur.idfr );

  if (this.nomfournisseur) { this.fournisseur.nomfournisseur = this.nomfournisseur; }
  if (this.adresse) { this.fournisseur.adresse = this.adresse ;}
  if (this.ville) { this.fournisseur.ville = this.ville ;}
  if (this.codepostal) { this.fournisseur.codepostal = this.codepostal ;}
  if (this.email) { this.fournisseur.email = this.email ;}
  if (this.telephone) { this.fournisseur.telephone = this.telephone; }
  if (this.fax) { this.fournisseur.fax = this.fax ;}
this.service.editfournisseur(this.fournisseur.idfr , this.fournisseur.nomfournisseur ,this.fournisseur.telephone, this.fournisseur.email,this.fournisseur.ville, this.fournisseur.fax,this.fournisseur.codepostal,this.fournisseur.adresse).subscribe(data => {

console.log(data);
this.fournisseur=data;
this.toastr.success('Article mis à jour avec success');
//this.getfournisseur();
},error =>console.log(error));


}


}





retourliste(){
  this.router.navigate(["home/fournisseur/list"]);
}








}
