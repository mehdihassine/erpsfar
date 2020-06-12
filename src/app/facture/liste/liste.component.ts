import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html'
  
})
export class ListeComponent implements OnInit {

  statut:any;
 dateprod: any;
datecreation: any;
codarticle: string;

  constructor(private service: FactureService, private router: Router) { }
facture:any =[];

  ngOnInit(): void {
    this.refresh(); 
  }










  
  refresh(){
    this.service.getfactureall().subscribe(data=>{
      console.log(data); 
    this.facture=data ; 


    },error=> console.log (error));

  }



  typefacture(nfacture,type) {

   
    if (type == "vente") { //RESULT KO

      this.router.navigate(["home/facture/detail/"+nfacture]);
    }
      
    else if (type =="divers") {
   
    this.router.navigate(["home/facture/detaildiv/"+nfacture]);
      
  }

  else if (type === "achat") {
   
    this.router.navigate(["home/facture/achat/"+nfacture]);
      
  }
 
  }
  





/*
  supprimer( dateprod){
    this.service.supprimerprod( dateprod).subscribe(data=>{
      console.log(data);
      this.refresh();
    },error=>console.log(error));
  }
  


rechprod(){
  this.service.rechercheprod(this.dateprod).subscribe(data => {
    console.log("recherche : "+this.dateprod);
    this.facture=[];
    this.facture=(data);
    console.log(data);
var responserecherche = data[0].respo;

if(responserecherche === "erreurprod"){
  alert('Commande [ '+this.dateprod+' ] introuvable');
  this.refresh();
  console.log("retour liste");
}
this.dateprod="";

  }, error => console.log(error));
}


affliste(){
  console.log("afficher liste");

  this.dateprod="";
  this.refresh();
}

*/
}


