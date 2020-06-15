import { Component, OnInit } from '@angular/core';
import { ApiFournisseurService } from 'src/app/services/api-fournisseur.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-fournisseur',
  templateUrl: './liste-fournisseur.component.html'
  
})
export class ListeFournisseurComponent implements OnInit {
fournisseur: any=[];
nomfournisseur:any;
  idPr: any;
  constructor(private service :ApiFournisseurService , private router: Router,private toastr:ToastrService) { }
  
  ngOnInit(): void {
    this.affiche(); 
  }






  refresh(){
    this.affiche();
  }


  idfrournisseur(idfr){
   
    this.idPr=idfr;
   
     }


  affiche(){
    this.service.getAllfournisseur().subscribe(data=>{
      console.log(data); 

      if(data.RESPONSE){
        this.toastr.error(data.RESPONSE);
      }
      else{
    this.fournisseur=data ; 
  }
    },error=> console.log (error));





  }
  supprimer(idPr){
    this.service.deletefournisseur(idPr).subscribe(data=>{
      this.toastr.success(data.RESPONSE);
      console.log(data);
      this.refresh();
    },error=>console.log(error));
  }




  nouveaufournisseur(){
    this.router.navigate(["home/fournisseur/ajout"]);
  }


  rechfr(){

    if(!this.nomfournisseur){
      this.toastr.warning('Champ recherche vide !!');
      this.refresh();
    }

else{
    //kan el libelle categorie fareg  en9oulou 
    this.service.rechfournisseur(this.nomfournisseur).subscribe(data => {
      console.log("recherche : "+this.nomfournisseur);
      this.fournisseur=[];
      this.fournisseur=(data);
      console.log(data);
  var responserecherche = data[0].respo;
  
  if(responserecherche === "erreurfournisseur"){
    this.toastr.error('fournisseur ['+this.nomfournisseur+'] introuvable');
  
    this.refresh();
    console.log("retour liste");
  }
  this.nomfournisseur="";
  
    }, error => console.log(error));
  }
}

}