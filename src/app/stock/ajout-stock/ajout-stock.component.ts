import { Component, OnInit } from '@angular/core';
import { ApiStockService } from 'src/app/services/api-stock.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout-stock',
  templateUrl: './ajout-stock.component.html'
 
})
export class AjoutStockComponent implements OnInit {
  codarticle:any;
  libelle:any;
  prixachat:any;
  fournisseur:any;
  datefinv:any;
  description:any;
  type:any;
  typestockage:any;
  listefournisseur:any=[];
  listearticle:any=[];
  typebox:any='choisir';
  typebox1:any='choisir';
  typebox2:any='choisir';
  article:any; 
  remise:any;
  taxe:any; 
  quantite:any; 
  libellearticle:any; 
  index: number;
  public nligne1: number = 0;
  numfact:any;
  stock:any=[];
  nreception: any;
  table3: string;
  table5: string;
  table4: any=[];
  constructor(private service: ApiStockService , private router : Router,private toastr:ToastrService) { }
  
  
  ngOnInit(): void {
    this.getlistefournisseur();
    this.getlistearticle();
    this.newreception();
  }





  newreception() {
    var nreception: number;
    /* get num commande +1 */
    this.service.getnumreception().subscribe(data => {
      nreception = (data.nreception); //nfacture+1 => calculé dans le getnumrecep.php
      console.log('getnumreception = ' + nreception);
      this.nreception = nreception;
      //this.getartrecep(this.nfacture);
      
    }, error => console.log(error));
  }




  getlistefournisseur(){
    this.fournisseur="";
    this.service.getAllfournisseur().subscribe(data => {
  if(data.RESPONSE){
this.toastr.warning("liste fournisseur vide !! "); 
  }else
      {
        this.listefournisseur = data;
        this.typebox="choisir";
  }  
      console.log(this.listefournisseur);
      },error => console.log(error));
  }
  getlistearticle(){
    this.article="";
    this.service.getarticle().subscribe(data => {
  if(data.RESPONSE){
this.toastr.warning("liste article vide !! "); 
  }else
      {
        this.listearticle = data;
        this.typebox="choisir";
  }  
      console.log(this.listearticle);
      console.log(this.listearticle.length)

      },error => console.log(error));
  
  }




getlibelle(){

  for (let i=0; i<this.listearticle.length; i++) {
    if(this.codarticle== this.listearticle[i].codearticle){
      this.libellearticle=this.listearticle[i].libellearticle;
      this.typestockage=this.listearticle[i].typestockage;
      return this.libellearticle;
    }
    else{
      if((this.codarticle==undefined)||(this.codarticle=="")){
        this.libellearticle="";
        this.typestockage="choisir";
      }
      else{
        this.libellearticle="**article inexistant**";
        this.typestockage="**invalide**";
      }
    }
  }
 
   }






increment() { this.nligne1 += 1; }


setnlignezero() { this.nligne1 = 0; }





ajouter() {
  var reg2=/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
  var reg = /^[0-9]+$/;
  var regdat=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  var table3: any = [];
  if (!this.codarticle) {
    this.toastr.error('champ code article  vide!!');
  }
  else if ((!this.quantite.match(reg))||(!this.quantite)) {
    this.toastr.error('champ quantité  obligatoirement numerique!!');
  }

  else if ((!this.prixachat.match(reg2))||(!this.prixachat)) {
    this.toastr.error('champ prix achat   obligatoirement numerique!!');
  }

  else if ((!this.remise.match(reg))||(!this.remise)) {
    this.toastr.error('champ remise  obligatoirement numerique!!');
  }

  else if ((!this.taxe.match(reg))||(!this.taxe)) {
    this.toastr.error('champ Taxe  obligatoirement numerique!!');
  }

  else if(!this.fournisseur){
    this.toastr.error("choisir  fournisseur !!");
  }
  
  // else if ((!this.datefinv.match(regdat))||(!this.datefinv)) {
  //   this.toastr.error('verifier votre date !!');
  // }

  else if(!this.type){
    this.toastr.error("choisir  emplacement !!");
  }

else{

  this.increment();
  console.log('reception = ' + this.nreception + ' ' + 'article= ' + this.codarticle);
  
  this.service.addreception(this.nreception, this.nligne1, this.codarticle, this.quantite, this.type, this.fournisseur,this.prixachat,this.datefinv,this.remise,this.taxe,this.description,this.numfact).subscribe(data3 => {
    table3 = data3;
    console.log(data3);
    this.toastr.show("article ajoutee ");
    this.table3 = JSON.stringify(table3);
    console.log('reception=' + table3[0] + '|' + 'nligne=' + table3[1]+ '|' + 'art=' + table3[2]+ '|' + 'qte=' + table3[3]);
    this.cleartextbox1();
   // this.dataecrea();
    this.refreshreception(this.nreception);
  


  }, error => console.log(error));
}
}




cleartextbox1(){
  this.codarticle="";
  this.quantite="";
  this.type="choisir";
  this.prixachat="";
  this.datefinv="";
  this.typestockage="choisir";
  this.remise="";
  this.taxe="";
}




cleartextbox(){
  this.codarticle="";
  this.quantite="";
  this.type="choisir";
  this.fournisseur="choisir";
  this.prixachat="";
  this.datefinv="";
  this.typestockage="choisir";
  this.remise="";
  this.taxe="";
  this.description="";
}



getartreception(nreception) {
  this.service.getartreception(nreception).subscribe(data4 => {
    //console.log('ncmde getartcdv  = '+nfacture);
    this.stock[0] = data4;
    this.stock = this.stock[0];
   //console.log('php = '+JSON.stringify(this.facture));
  

  }, error => console.log(error));
}


refreshreception(nreception) {
  this.stock = [];
   this.getartreception(nreception);
  
 }





 suppartreception(nligne1) {

  console.log(''+this.nreception+''+nligne1+'');

  var table5: any = [];
  this.service.supprimerartreception(this.nreception, nligne1).subscribe(data5 => {
    table5 = data5;
    this.table5 = JSON.stringify(table5.resp);
    this.toastr.success("ligne de reception "+nligne1+" "+"supprimee avec succes");
    console.log(this.table5);
    this.cleartextbox1();
    this. refreshreception(this.nreception);
  }, error => console.log(error));
}




 
annuler(nreception) {
  console.log('nreception = ' + nreception);
  this.service.annulerreception(this.nreception).subscribe(data => {
    this.table4[0] = data;
    console.log('reponse  = ' + JSON.stringify(this.table4[0].resp));
    this.stock = [];
   this.setnlignezero();
    this.cleartextbox();
    this.newreception();
   this.cleartextbox();
  }, error => console.log(error));
}
 






valider(nreception) {


 this.service.validerreception(nreception).subscribe(data => {
    this.table4[0] = data;
  console.log('php = ' + JSON.stringify(this.table4[0].resp));
    this.stock = [];
    this.setnlignezero();
    this.cleartextbox();
    this.newreception();

    this.router.navigate(["home/stock/all"]);
    
  }, error => console.log(error));


}

}