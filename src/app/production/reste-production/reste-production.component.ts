import { Component, OnInit } from '@angular/core';
import { ApiProductionService } from 'src/app/services/api-production.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reste-production',
  templateUrl: './reste-production.component.html'
 
})
export class ResteProductionComponent implements OnInit {

  statut:any;
idproduit:any;
qteprod:any;
  datecreation: any;
  codarticle: string;
  qterejeter:any;
  qterestant:any;
beneficeprod:any;
benefice:any;
  qtevente: any;
  prixvente: number;
  prixvente1: number;
  prixrevient1: number;
  nligne: any;
  dateprod:any;
  benficeProd:any;
    constructor(private service: ApiProductionService,private activateroute:ActivatedRoute,private router: Router) {
      this.dateprod = this.activateroute.snapshot.paramMap.get("id"); }
  production:any ={}
  qteRestProduction:any;

/* test */

test:any;







    ngOnInit(): void {


      this.refrechdetalprod(this.dateprod);






      this.refresh(); 
    }





 
    refresh(){
     this.rechprod();
    }
    supprimer( dateprod){
      this.service.supprimerprod( dateprod).subscribe(data=>{
        console.log(data);
        this.refresh();
      },error=>console.log(error));
    }
    
  
  //recherche cdv
  rechprod(){
    this.service.updaterest(this. dateprod).subscribe(data => {
      console.log("recherche : "+this. dateprod);



      //this.production=[];
      this.production=(data);
      console.log(data[0].respo);
      console.log(this.production);
    
  var responserecherche = data[0].respo;
  
  if(responserecherche === "erreurprod"){
    alert('Commande [ '+this. dateprod+' ] introuvable');
    this.refresh();
    console.log("retour liste");
  }



  this. dateprod="";
  
    }, error => console.log(error));
  }



  
  
  affliste(){
    console.log("afficher liste");
  
    this. dateprod="";
    this.refresh();
  }




  update(dateprod,nligne,idproduit,qteprod,qterestant,qterejeter){

    this.service.updateligneprod(dateprod,nligne,idproduit,qteprod,qterestant,qterejeter).subscribe(data=>{

      console.log('dateprod:'+dateprod);
      console.log('nligne:'+nligne);
      console.log('qterestant:'+qterestant);
      console.log('qterejeter:'+qterejeter);
      console.log('idproduit:'+idproduit);
      console.log('qteprod:'+qteprod);

      console.log(data);
      this.production=[];
      this.refrechdetalprod(dateprod);
    },error=>console.log(error));
  }

  refrechdetalprod(dateprod){
    this.service.refreshprod(dateprod).subscribe(data=>{
      console.log(data);
      this.production=(data);
        },error=>console.log(error));



  }

  
  
}
