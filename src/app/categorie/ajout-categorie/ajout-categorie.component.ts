import { Component, OnInit } from '@angular/core';
import{ApiCategorieService} from 'src/app/services/api-categorie.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html'
 
})
export class AjoutCategorieComponent implements OnInit {
  categorie:any=[];
  libelle:any;
  description:string;
libellebox:any;
descriptionbox:any; 
  idtype: any;
  constructor(private service:ApiCategorieService ,private router:Router,private toastr: ToastrService) { } 

  ngOnInit(): void {
this.cleartxtboox();

  }

refresh(){

this.categorie=[];

}















  ajouter() {

    
    var reg = /^[A-Za-z]+$/;


if (!this.libelle)
{

  this.toastr.error('champ libelle obligatoire!!');
}



else if (this.libelle.match(reg)){

 

  this.service.ajoutCategorie(this.libelle, this.description).subscribe(data => {

    this.categorie=data;
    
    console.log(data);
    console.log(data.RESPONSE);
    
    if (data.RESPONSE == "0"){
      this.categorie=[];
      this.toastr.error('Catégorie ['+this.libelle+'] déjà existante');
    }
    else {
    this.toastr.success('Catégorie ['+this.libelle+'] ajoutée avec success!!');
    }
    
    this.cleartxtboox();
          
        }, error => console.log(error));    



}

else {
  this.toastr.error('champ libelle obligatoirement chaine de caractére!!');


}

   





  }
  





  retourliste(){

    this.router.navigate(["home/categorie/all"]);
  
  
  }






cleartxtboox(){
  this.description="";
  this.descriptionbox="";
  this.libelle="";
  this.libellebox="";
}












  suppacategorie(idtype) {
    this.service.deletecategorie(idtype).subscribe(data => {
      console.log(data);
      this.refresh();
  },error => console.log(error));
}











}
