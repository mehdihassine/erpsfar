import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFournisseurService } from 'src/app/services/api-fournisseur.service';
import { error } from 'protractor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html'
  
})
export class AjoutFournisseurComponent implements OnInit {
  nomfournisseur:any; 
  adresse:any;
   ville:any;
    codepostal :any;
    email:any;
    telephone:any;
     fax:any;
   
     fournisseur:any=[];

  constructor(private service:ApiFournisseurService, private router: Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.cleartxtbox();
  }








/* var reg = /^[0-9]+$/;


    if (!this.codearticle) {
      this.toastr.error('champ code article  obligatoire!!');
    }

    else if (!this.libelle) {
      this.toastr.error('champ libelle obligatoire!!');
    }
    else if (!this.type) {
      this.toastr.error('champ type article obligatoire!!');
    }

    else if (!this.nature) {
      this.toastr.error('champ nature article obligatoire!!');
    }

    else if (!this.typestockage) {
      this.typestockage = 'normal';
    }
    else if (!this.seuil.match(reg)) {
      this.toastr.error('champ seuil numerique!!');
    }*/


refresh(){ //nadioulha fel supprimer 
  this.fournisseur=[]; 
}


add(){


  var reg = /^[0-9]+$/;
  var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


//  if (!this.nomfournisseur) {
  //  this.toastr.error('champ nom fournisseur obligatoire!!');
  //}

  if (!this.adresse) {
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





 
  this.service.addfournisseur(this.nomfournisseur,this.telephone,this.email,this.ville,this.fax,this.codepostal,this.adresse).subscribe(data=>{
    console.log(data);
    if(data.RESPONSE){
      this.toastr.error(data.RESPONSE);
    }
    else {
      this.toastr.success("Fournisseur [ "+this.nomfournisseur+" ] crée avec success");
      this.fournisseur=data; 
    }


   this.cleartxtbox();
  },error=>console.log(error));
}

}


cleartxtbox(){
 
  this.nomfournisseur="";
  this.adresse="";
  this.ville="";
  this.codepostal="";
  this.email="";
  this.telephone="";
  this.fax="";
}




suppfournisseur(idfr) {
  this.service.deletefournisseur(idfr).subscribe(data => {
    console.log(data);
    this.toastr.success(data.RESPONSE);
    this.refresh();
},error => console.log(error));
}







retourliste(){

  this.router.navigate(["home/fournisseur/list"]);


}











}
