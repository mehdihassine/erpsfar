import { Component, OnInit } from '@angular/core';
import { ApiCategorieService } from 'src/app/services/api-categorie.service';
import { error } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html'
 
})
export class ListeCategorieComponent implements OnInit {
categorie:any[]; 
libelle : any ; 
  idPr: any;
   
  constructor(private service:ApiCategorieService,private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    
    this.refresh();
    
  }
  refresh(){
    this.service.getAllcategorie().subscribe(data=>{
      console.log(data); 
    this.categorie=data ; 
    },error=> console.log (error));
    
  }



  
  libelles(libelle){
   
    this.idPr=libelle;
   
     }
   
 delete(libelle){
    this.service.supprimercategorie(libelle).subscribe(data=>{
      console.log(data);
      this.refresh();
    },error=>console.log(error));
  } 
 

 

  rechcategorie(){

    if(!this.libelle){
      this.toastr.warning('Champ recherche vide !!');
      this.refresh();
    }

else{
    //kan el libelle categorie fareg  en9oulou 
    this.service.recherchecategorie(this.libelle).subscribe(data => {
      console.log("recherche : "+this.libelle);
      this.categorie=[];
      this.categorie=(data);
      console.log(data);
  var responserecherche = data[0].respo;
  
  if(responserecherche === "erreurcategorie"){
    this.toastr.error('Catégorie ['+this.libelle+'] introuvable');
  
    this.refresh();
    console.log("retour liste");
  }
  this.libelle="";
  
    }, error => console.log(error));
  }
}

afficheliste(){
  this.refresh();
}





ajoutercategorie(){

  this.router.navigate(["home/categorie/ajout"]);


}

  
  
}
