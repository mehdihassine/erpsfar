import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProduitService } from 'src/app/services/api-produit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
styleUrls:['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  nom_produit: string; prix_produit: string; prix_vente: string; desc: string; type_produit: string;
  diametre:any;
  nom:any;
  cout:any;
  vente:any;
 description:any; 
 tva:any;
  type:any;
  typebox:any="choisir";
  
  produit:any=[];
  listescategorie:any=[];
  typecbox: any="choisir";
  
  constructor(private service:ApiProduitService, private router: Router,private toastr :ToastrService) { }

  ngOnInit(): void {
    this.cleartxt();
    this.getcategorie();
  }

  cleartxt(){

this.diametre="";
this.nom="";
this.cout="";
this.vente="";
this.description="";
this.typebox="choisir";
this.type="";
    this.tva="";
  }

getcategorie(){
  this.type="";
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
    var reg = /^[0-9]+$/;
    if (!this.nom) {
      this.toastr.error('champ nom  obligatoire!!');
    }
  
    else if ((!this.cout.match(reg))||(!this.cout)) {
      this.toastr.error('champ coût de revient  obligatoirement numerique!!');
    }
    
   
    else if((!this.vente.match(reg))||(!this.vente)){
    
      this.toastr.error('champ prix vente  obligatoirement numerique!!');
    }
   
  
    
    else if (!this.type) {
      this.toastr.error('champ type de produit obligatoire!!');
    }

else{

    this.service.addproduit(this.diametre,this.nom, this.cout, this.vente, this.type, this.description,this.tva).subscribe(data => {
     
      console.log(data);
   
      if(data.RESPONSE){
      
        this.toastr.error(data.RESPONSE);
      
      }
      else{
        this.produit[0]=(data[1]);
        console.log( this.produit[0]);
  
      }
      this.cleartxt();
     
    }, error => console.log(error));
  }


}


}






/*



add() {
 
  var reg = /^[0-9]+$/;


  if (!this.nom) {
    this.toastr.error('champ nom  obligatoire!!');
  }

  else if (!this.prenom) {
    this.toastr.error('champ prenom obligatoire!!');
  }
  
  else if (!this.adress) {
    this.toastr.error('champ adress obligatoire!!');
  }
  else if((!this.telephone.match(reg))||(!this.telephone)){
  
    this.toastr.error('champ telephone obligatoirement numerique!!');
  }
 

  else if ((!this.cin.match(reg))||(!this.cin)){
    this.toastr.error('champ cart identitée obligatoirement numerique!!');
   }
    else if  ((!this.cnss.match(reg))||(!this.cnss)){
      this.toastr.error('champ numero CNSS obligatoirement numerique!!');
     }
  else if (!this.typec) {
    this.toastr.error('champ type contrat obligatoire!!');
  }
  else if (!this.specialite) {
    this.toastr.error('champ specialité obligatoire!!');
  }


  else {






  this.service.addemploye(this.nom,this.prenom,this.adress,this.telephone,this.cin,this.cnss,this.typec,this.specialite).subscribe(data => {
    console.log(data);
   
    if(data.RESPONSE){
    
      this.toastr.error(data.RESPONSE);
    
    }
    else{
      this.employees[0]=(data[1]);
      console.log( this.employees[0]);

    }
    this.cleartxtbox();
  
},error=>console.log(error));



}





}
retourlist(){

this.router.navigate(["home/employee/all"]);





}
refresh(){

this.employees=[];

}


supprimer(idemployee){

  this.service.deleteEmploye(idemployee).subscribe(data=>{
    this.toastr.warning(data.RESPONSE);
    this.refresh();
  },error=>console.log(error));
}*/