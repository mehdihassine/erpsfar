import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFournisseurService } from 'src/app/services/api-fournisseur.service';
import { error } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Fournisseur } from 'src/app/models/fournisseur';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html'
  
})
export class AjoutFournisseurComponent implements OnInit {
 
   
     fournisseur:any=[];
  addFournisseur:FormGroup;
  nom: any;
;

  constructor(private service:ApiFournisseurService, private router: Router,private toastr:ToastrService,private fb: FormBuilder) {
    let formControls={
      nomfournisseur:new FormControl('',[Validators.required]),
      adress:new FormControl('',[Validators.required]),
      ville:new FormControl('',[Validators.required]),
      codepostal:new FormControl('',[Validators.required]),
      email: new FormControl('', [  Validators.required, Validators.pattern("[^ @]*@[^ @]*"),Validators.email]),
    
      telephone:new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      fax:new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
    }
    this.addFournisseur=this.fb.group(formControls);
   }
   get nomfournisseur(){return this.addFournisseur.get('nomfournisseur')}
   get adress(){return this.addFournisseur.get('adress')}
   get ville(){return this.addFournisseur.get('ville')}
   get codepostal(){return this.addFournisseur.get('codepostal')}
   get email(){return this.addFournisseur.get('email')}
   get telephone(){return this.addFournisseur.get('telephone')}
   get fax(){return this.addFournisseur.get('fax')}
  
  ngOnInit(): void {
   // this.cleartxtbox();
  }









refresh(){ //nadioulha fel supprimer 
  this.fournisseur=[]; 
}


add(){

let data =this.addFournisseur.value;
this.nom=data.nomfournisseur;
console.log(this.nom);
console.log(data.ville);
console.log(data.adress);
console.log(data.ville);
let user =new Fournisseur(data.nomfournisseur,data.telephone,data.email,data.ville,data.fax,data.codepostal,data.adress)





 
  this.service.addfournisseur(user).subscribe(data=>{
    console.log(data);
    if(data['RESPONSE']){
      this.toastr.error(data['RESPONSE']);
    }
    else {
      this.toastr.success("Fournisseur [ "+this.nom+" ] crée avec success");
      this.fournisseur=data; 
      this.addFournisseur.reset();
    }


   //this.cleartxtbox();
  },error=>console.log(error));


}


// cleartxtbox(){
 
//   this.nomfournisseur="";
//   this.adresse="";
//   this.ville="";
//   this.codepostal="";
//   this.email="";
//   this.telephone="";
//   this.fax="";
// }




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
