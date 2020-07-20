import { Component, OnInit } from '@angular/core';
import { ApiProductionService } from 'src/app/services/api-production.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html'

})
export class CreationComponent implements OnInit {
  table4: any = [];
  aff: any;
  codarticle: any;
  quantite: any;
  table3: any;
  txtbox: any;
  txtbox2: any;
 nligne1:any;
  table5: any;
  ttc: any;
  montanttotal: any;
  table: any;
  dateprod:any;
  datecreation: any; 
  dateprod2: any;
  typecbox: string="choisir";
  listesproduit: any=[];

  constructor(private service: ApiProductionService, private router: Router,private datePipe: DatePipe,private toastr :ToastrService) { }

  ngOnInit(): void {

    var date = new Date();
    this.dateprod=this.datePipe.transform(date,"ddMMyyyy");
    this.dateprod2=this.datePipe.transform(date,"dd/MM/yyyy");
    this.getproduit();
    this.getartprod(this.dateprod);

   // this.newproduction(); //get num commande +1 
  }

  getproduit(){
    this.codarticle="";
    this.service.getAllproduit().subscribe(data => {
  if(data.RESPONSE){
  this.toastr.warning("liste produits vide !! "); 
  }else
      {
        this.listesproduit = data;
        this.typecbox="choisir";
  }  
      console.log(this.listesproduit);
      },error => console.log(error));
  }



  /*get art prod encours */
  getartprod(dateprod) { 
    this.service.getartprod(dateprod).subscribe(data4 => {
      console.log(' getartprod  = '+dateprod);
      this.table4 = data4;
      this.aff = this.table4;

      console.log(this.aff );

     //console.log('php = '+JSON.stringify(this.aff));
     this.prixprod(dateprod);

    }, error => console.log(error));
  }


  //refresh table aff 
  refreshprod(dateprod) {
    this.aff = [];
    this.getartprod(dateprod);
    this.prixprod(dateprod);
  }




  //
  cleartextbox() {
    this.txtbox = '';
    this.txtbox2 = '';
    this.codarticle = '';
    this.quantite = '';
    this.typecbox='choisir';
    //console.log('txtbox = '+this.txtbox);
  } 


  /*
  increment() { this.nligne1 += 1; }
  setnlignezero() { this.nligne1 = 0; }

*/
  

  //ajouter article to cdv
  ajouter() {

    
     
      this.service.getlastligne(this.dateprod).subscribe(data5 => {
        this.nligne1 = data5.nligne;
        

        console.log('nligne='+this.nligne1);
     
    

    var table3: any = [];
  
    this.service.addartproduction(this.dateprod, this.nligne1, this.codarticle, this.quantite).subscribe(data3 => {
      table3 = data3;
      console.log(data3);
      this.table3 = JSON.stringify(table3);

      var resp = data3.resp;

      if(resp === "0"){
        alert(' Erreur Article ['+this.codarticle+'] inexistant dans la base !');
      }

      //console.log('date='+this.dateprod );
      /*console.log('nligne='+this.nligne1 );
      console.log('codart='+this.codarticle );
      console.log('qte='+this.quantite );
*/
      this.cleartextbox();
      
      this. refreshprod(this.dateprod);
    }, error => console.log(error));

  }, error => console.log(error));
  }




  //supprimer article from cdv
  suppartprod(produit) {

    console.log(''+this.dateprod+''+produit+'');

    var table5: any = [];//declaration d'un array
    this.service.supprimerartprod(this.dateprod, produit).subscribe(data5 => {
      table5 = data5;// array tabel5 = retour mta3 service mta3 el php
      this.table5 = JSON.stringify(table5.resp);// tabel5 lina wala valeur => mchai 5dai el valeur mta3 resp eli hiya mawjouda fel php
      console.log(this.table5);
      this.cleartextbox();
      this. refreshprod(this.dateprod);
    }, error => console.log(error));
  }



  valider(dateprod) {
    console.log('dateprod = ' + dateprod);
    this.service.validerprod(dateprod).subscribe(data => {
      this.table4[0] = data;
      console.log('php = ' + JSON.stringify(this.table4[0].resp));
      this.aff = [];
     // this.setnlignezero();
      this.cleartextbox();
      //this.newproduction();
      
    }, error => console.log(error));
  }




  annuler(dateprod) {
    console.log('cdv = ' + dateprod);
    this.service.annulerprod(dateprod).subscribe(data => {
      this.table4[0] = data;
      console.log('reponse  = ' + JSON.stringify(this.table4[0].resp));
      this.aff = [];
    //  this.setnlignezero();
      this.cleartextbox();
      this.montanttotal="";
     // this.newproduction();
    }, error => console.log(error));
  }


  prixprod(dateprod){
    this.service.prixtotalprod(dateprod).subscribe(data7 => {

    this.montanttotal=data7.montanttotal;
    this.montanttotal=this.montanttotal+' TND';
    console.log('ttc = ' + data7.montanttotal);
    }, error => console.log(error));
  }
   


}
