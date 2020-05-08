import { Component, OnInit } from '@angular/core';
import { ApiProduitService } from 'src/app/services/api-produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  produit:any={};
 
  id: any;
  nomProduit: any;
  diametre: any;
  coutrevien: any;
  prixvente: any;
  descriptionProduit: any;
  produit2:any={}; 
  typeProduit_id: any;
  listescategorie: any=[];
  typebox: string;
  type:any;
  tva: any;
  constructor(private service: ApiProduitService,private toastr :ToastrService, private activateroute: ActivatedRoute, private router: Router) {
    
    this.id = this.activateroute.snapshot.paramMap.get("id");
  }


 


  ngOnInit(): void {
   this.getproduit();
   this.getcategorie();
  }
getproduit(){

  this.service.getProduitByID(this.id).subscribe(data => {
    this.produit = data[0];
    console.log(JSON.stringify(this.produit));
    console.log(this.produit);
this.diametre=this.produit.diametre;
this.nomProduit=this.produit.nomProduit;
this.coutrevien=this.produit.coutrevien;
this.prixvente=this.produit.prixvente;
this.descriptionProduit=this.produit.descriptionProduit;
this.type=this.produit.libelle;
this.tva=this.produit.tva;


this.produit=[];
  }, error => console.log(error));
}

getcategorie(){
 
  this.service.getAllgategorie().subscribe(data => {
if(data.RESPONSE){
this.toastr.warning("liste specialiter vide !! "); 
}else
    {
      this.listescategorie = data;
      this.typebox="categorie";
}  
    console.log(this.listescategorie);
    },error => console.log(error));
}











  edit() {

    

    var reg = /^[0-9]+$/;
    if (!this.nomProduit ) {
      this.toastr.error('champ nom  obligatoire!!');
    }
  
    else if ((!this.coutrevien.match(reg))||(!this.coutrevien)) {
      this.toastr.error('champ coût de revient  obligatoirement numerique!!');
    }
    
   
    else if((!this.prixvente.match(reg))||(!this.prixvente)){
    
      this.toastr.error('champ prix vente  obligatoirement numerique!!');
    }
   
  
    
    else if (!this.type) {
      this.toastr.error('champ type de produit obligatoire!!');
    }



else{
 
  if (this.id) { this.produit.id = this.id }
  if (this.nomProduit) { this.produit.nomProduit = this.nomProduit }
  if (this.diametre) { this.produit.diametre = this.diametre }
  if (this.coutrevien) { this.produit.coutrevien = this.coutrevien }
  if (this.prixvente) { this.produit.prixvente = this.prixvente }
  if (this.descriptionProduit) { this.produit.descriptionProduit = this.descriptionProduit }
  if (this.type) { this.produit.type = this.type }
  if (this.tva) { this.produit.tva = this.tva }

  this.service.editproduit(this.produit.id,this.produit.diametre,this.produit.nomProduit,
    this.produit.coutrevien,this.produit.prixvente,this.produit.descriptionProduit,this.produit.type,this.produit.tva).subscribe(data => {
    console.log(data);
    if(data.RESPONSE){
      this.toastr.warning(data.RESPONSE);
      //toestr
            }
            else{
      
            this.produit[0] = data[1];
            this.toastr.success("modifier avec succes")
          }
  }, error => console.log(error));
}

}



















   


         



  retourliste() {
    this.router.navigate(["home/produit/all"]);
  }


  delete(id) {
    this.service.deleteproduit(id).subscribe(data => {

      console.log(data);
      this.retourliste();
      alert('Confirmer suppression Produit [' + this.produit.nom_produit + '] ?');
    }, error => console.log(error));
  }

}