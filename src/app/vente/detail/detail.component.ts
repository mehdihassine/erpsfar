import { Component, OnInit } from '@angular/core';
import { VenteService } from 'src/app/services/vente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'

})
export class DetailComponent implements OnInit {
  id_produit:any;
  montanttotal:any;
  statut:any;
   dateprod: any;
  datecreation: any;
  codarticle: string;
  benficetotal:any;
  benficetotalproduit: any;
  
    constructor(private service :VenteService , private router: Router) { }
  production:any ={}
  
    ngOnInit(): void {
      this.refresh(); 
  
    }
    
    refresh(){
      this.service.getproduitall().subscribe(data=>{ 
        console.log(data); 
      this.production=data ; 
      this.prixprod();
      },error=> console.log (error));
  
    }
    supprimer( dateprod){
      this.service.supprimerprod( dateprod).subscribe(data=>{
        console.log(data);
        this.refresh();
      },error=>console.log(error));
    }
    
  
  //recherche cdv
  rechprod(){
    this.service.rechercheproduit(this.id_produit).subscribe(data => {
      console.log("recherche : "+this.id_produit);
      this.production=[];
      this.production=(data);
      console.log(data);
  var responserecherche = data[0].respo;
  
  this.benficetotal= data[0].benficeProd;
  
//

this.prixprodrech(this.id_produit);


//




  //this.prixprodrech(this.id_produit);

  if(responserecherche === "erreurproduit"){
    alert('Commande [ '+this.id_produit+' ] introuvable');
    this.refresh();
    console.log("retour liste");
  }
  this.dateprod="";
  
    }, error => console.log(error));
  }
  


  prixprodrech(id_produit){
    this.service.prixtotalproduitrech(id_produit).subscribe(data8 => {
      this.benficetotal = 0;

    this.benficetotalproduit=data8.benficetotalproduit;
    this.benficetotalproduit=this.benficetotalproduit+' TND';
    this.benficetotal= this.benficetotalproduit;

    console.log('ttc = ' + this.benficetotal);
    console.log('ttc = ' + this.benficetotalproduit);
    console.log('ttc = ' + data8.benficetotalproduit);

    return this.benficetotal;
    }, error => console.log(error));
  }














  
  affliste(){
    console.log("afficher liste");
  
    this.id_produit="";
    this.refresh();
  }


  prixprod(){
    this.service.prixtotalproduit().subscribe(data7 => {
  
    this.benficetotal=data7.benficetotal;
    this.benficetotal=this.benficetotal+' TND';
    console.log('ttc = ' + data7.benficetotal);
    }, error => console.log(error));
  }
  
  //////
 
  
     
  
  }
  
  

