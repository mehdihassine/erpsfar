import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProduitService } from 'src/app/services/api-produit.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
styleUrls:['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  
  
  types:any;
  typebox:any="choisir";
  
  produit:any=[];
  listescategorie:any=[];
  typecbox: any="choisir";
  addProduit: FormGroup;

  
  constructor(private service:ApiProduitService, private router: Router,private toastr :ToastrService,private fb: FormBuilder) {
     let formControls={
    nom :  new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern('[a-zA-Z ]*')]),
    cout :   new FormControl('',[ Validators.required,Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')]),
    vente :   new FormControl('',[ Validators.required,Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')]),
    type :  new FormControl('null', [Validators.required]),
    tva :  new FormControl('', [Validators.required,Validators.max(3),Validators.pattern("^[0-9]*$"),]),
    diametre:new FormControl(Validators.nullValidator),
    description:new FormControl(Validators.nullValidator)
  }
  this.addProduit=this.fb.group(formControls);
 }
 get nom(){return this.addProduit.get('nom')}
   get cout(){return this.addProduit.get('cout')}
   get vente(){return this.addProduit.get('vente')}
   get type(){return this.addProduit.get('type')}
   get tva(){return this.addProduit.get('tva')}
   get diametre(){return this.addProduit.get('diametre')}
   get description(){return this.addProduit.get('description')}
 

  ngOnInit(): void {
    this.cleartxt();
    this.getcategorie();
  }

  cleartxt(){

this.addProduit.reset();
  }

getcategorie(){
  this.types="";
  this.service.getAllgategorie().subscribe(data => {
if(data.RESPONSE){
this.toastr.warning("liste specialiter vide !! "); 
}else
    {
      this.listescategorie = data;
      this.typecbox="choisir";
}  
    console.log(this.listescategorie);
    },error => console.log(error));
}




  add() {
   let data=this.addProduit.value; 
   let user =new Produit(data.diametre,data.nom,data.cout,data.vente,data.type,data.description,data.tva)
console.log(data.diametre)
console.log(data.description)
    this.service.addproduit(user).subscribe(data => {
   
      console.log(data);
   
      if(data['RESPONSE']){
      
        this.toastr.error(data['RESPONSE']);
      
      }
      else{
        
        this.produit = data;
        this.cleartxt();
  
      }
      
     
    }, error => console.log(error));
  


}


refresh(){

  this.produit=[];
  
  }
  
  
  supprimer(idProduit){
  
    this.service.deleteproduit(idProduit).subscribe(data=>{
      this.toastr.warning(data.RESPONSE);
      this.refresh();
    },error=>console.log(error));
  }

retourlist(){

  this.router.navigate(["home/produit/all"]);
  

  
  }
}