import { Component, OnInit } from '@angular/core';
import { ApiProductionService } from 'src/app/services/api-production.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-production',
  templateUrl: './liste-production.component.html'
})
export class ListeProductionComponent implements OnInit {


statut:any;
 dateprod: any;
datecreation: any;
codarticle: string;

  constructor(private service: ApiProductionService, private router: Router) { }
production:any =[];

  ngOnInit(): void {
    this.refresh(); 
  }
  
  refresh(){
    this.service.getprodall().subscribe(data=>{
      console.log(data); 
    this.production=data ; 
    },error=> console.log (error));

  }
  supprimer( dateprod){
    this.service.supprimerprod( dateprod).subscribe(data=>{
      console.log(data);
      this.refresh();
    },error=>console.log(error));
  }
  


rechprod(){
  this.service.rechercheprod(this.dateprod).subscribe(data => {
    console.log("recherche : "+this.dateprod);
    this.production=[];
    this.production=(data);
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


}

